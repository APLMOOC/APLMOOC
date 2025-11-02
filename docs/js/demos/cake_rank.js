import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";


function loadSeparatedCake(scene, {
    objUrl = "separatedCake.obj",
    mtlUrl = "separatedCake.mtl",
    onProgress = null,
    onError = (err) => console.error("separatedCake load error:", err),
    onLoad = null
} = {}) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
        mtlUrl,
        (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);

            objLoader.load(
                objUrl,
                (root) => {
                    
                    const textureLoader = new THREE.TextureLoader();
                    const texture = textureLoader.load('Colour.png');
                    
                    texture.colorSpace = THREE.SRGBColorSpace;
                    
                    
                    root.children.forEach((child) => {
                        if (child instanceof THREE.Mesh) {
                            // Filter out the "Bake" mesh that causes visual issues
                            if (child.name === "Bake") {
                                child.visible = false;
                                return;
                            }
                            
                            child.material = new THREE.MeshPhongMaterial({
                                map: texture, 
                                side: THREE.FrontSide,
                                transparent: false,
                                opacity: 1.0,
                                flatShading: false, 
                                depthWrite: true,
                                depthTest: true,
                                
                                shininess: 30,
                                specular: 0x111111 
                            });
                            
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });

                    
                    root.name = "separatedCake";
                    scene.add(root);
                    
                    
                    initializeCakeArray(root);
                    updateAPLDisplay();
                    
                    if (typeof onLoad === "function") onLoad(root);
                },
                (xhr) => {
                    if (typeof onProgress === "function") onProgress(xhr);
                },
                (err) => onError(err)
            );
        },
        null,
        (err) => onError(err)
    );
}



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;


renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100vw';
renderer.domElement.style.height = '100vh';
renderer.domElement.style.zIndex = '1';

document.body.appendChild(renderer.domElement);


document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


const ambient = new THREE.AmbientLight(0xffffff, 0.3); 
scene.add(ambient);

const dir = new THREE.DirectionalLight(0xffffff, 1.0); 
dir.position.set(5, 10, 7.5);
dir.castShadow = true;
dir.shadow.camera.near = 0.5;
dir.shadow.camera.far = 50;
dir.shadow.mapSize.set(1024, 1024);
scene.add(dir);


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


const aplDisplay = document.createElement('div');
aplDisplay.id = 'apl-display';
aplDisplay.style.cssText = `
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px;
    font-family: 'APL385', 'DejaVu Sans Mono', monospace;
    font-size: 14px;
    line-height: 1.2;
    border-radius: 5px;
    white-space: pre;
    z-index: 1000;
`;
document.body.appendChild(aplDisplay);

let cakeArray = Array(4).fill(null).map(() => 
    Array(3).fill(null).map(() => 
        Array(3).fill(null)
    )
);

const meshToPosition = new Map();
let cakeRoot = null; // Store the cake root for animation

function initializeCakeArray(root) {
    cakeArray = Array(4).fill(null).map(() => 
        Array(3).fill(null).map(() => 
            Array(3).fill(null)
        )
    );
    meshToPosition.clear();
    
    root.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && child.name) {
            const match = child.name.match(/^(Crust|Cream|Frosting|Candle)\.(\d)(\d)(\d)$/);
            if (match) {
                const [, typeName, xStr, yStr, zStr] = match;
                
                const x = parseInt(xStr) - 1;
                const y = parseInt(yStr) - 1; 
                const z = parseInt(zStr) - 1;
                
                if (x >= 0 && x < 3 && y >= 0 && y < 3 && z >= 0 && z < 4) {
                    let type;
                    switch (typeName.toLowerCase()) {
                        case 'crust': type = 'crust'; break;
                        case 'cream': type = 'cheese'; break;
                        case 'frosting': type = 'frosting'; break;
                        case 'candle': type = 'candle'; break;
                        default: type = 'cheese'; break;
                    }
                    
                    if (cakeArray[z][x][y] !== null) {
                        console.warn(`Position [X=${x},Y=${y},Z=${z}] already occupied by ${cakeArray[z][x][y].meshName}`);
                    } else {
                        cakeArray[z][x][y] = {
                            value: index + 1,
                            type: type,
                            highlighted: false,
                            meshName: child.name
                        };
                        
                        meshToPosition.set(child, {x: x, y: y, z: z, type: type});
                    }
                } else {
                    console.warn(`Coordinates out of bounds: [X=${x},Y=${y},Z=${z}] (valid ranges: X=0-2, Y=0-2, Z=0-3)`);
                }
            } else {
                console.warn(`Name doesn't match expected format: "${child.name}"`);
            }
        } else if (child instanceof THREE.Mesh) {
            console.warn(`Mesh ${index} has no name`);
        }
    });
}

function updateAPLDisplay() {
    const typeColors = {
        crust: '#D2B48C',
        cheese: '#F5F5DC',
        frosting: '#8B0000',
        candle: '#FFD700',
        default: '#A0A0A0'
    };
    
    let highlightedCoords = null;
    for (let z = 0; z < 4; z++) {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (cakeArray[z][x][y] && cakeArray[z][x][y].highlighted) {
                    highlightedCoords = {x, y, z};
                    break;
                }
            }
            if (highlightedCoords) break;
        }
        if (highlightedCoords) break;
    }
    
    let display = '<div style="font-family: monospace; padding: 15px;">';
    display += '<div style="color: white; font-weight: bold; margin-bottom: 10px;">Cake Array (4×3×3)</div>';
    
    let axisNumber = reductionAxis === 'x' ? 1 : (reductionAxis === 'y' ? 3 : 2);
    display += `<div style="color: #FFFF66; font-weight: bold; margin-bottom: 15px; padding: 5px; background-color: rgba(0,0,0,0.3); border-radius: 5px; display: inline-block;">+/[${axisNumber}]Cake</div>`;

    
    for (let z = 0; z < 4; z++) {
        // Calculate layer animation offset
        let layerTransform = '';
        let layerOpacity = 1;
        
        if (reductionAxis === 'x') {
            // Layers collapse toward bottom (z=0)
            const targetOffset = (0 - z) * 80 * reductionProgress; // Move toward layer 0
            layerTransform = `translateY(${targetOffset}px)`;
            layerOpacity = z === 0 ? 1 : (1 - reductionProgress * 0.7); // Bottom layer stays visible
        }
        
        display += `<div style="margin-bottom: 15px; transform: ${layerTransform}; opacity: ${layerOpacity}; transition: opacity 0.1s ease;">`;
        
        for (let y = 0; y < 3; y++) {
            // Calculate row animation offset
            let rowTransform = '';
            let rowOpacity = 1;
            
            if (reductionAxis === 'z') {
                // Rows collapse toward front (y=0)
                const targetOffset = (0 - y) * 23 * reductionProgress;
                rowTransform = `translateY(${targetOffset}px)`;
                rowOpacity = y === 0 ? 1 : (1 - reductionProgress * 0.7);
            }
            
            display += `<div style="display: flex; gap: 2px; margin-bottom: 2px; transform: ${rowTransform}; opacity: ${rowOpacity}; transition: opacity 0.1s ease;">`;
            
            for (let x = 0; x < 3; x++) {
                const piece = cakeArray[z][x][y];
                const isLayer1Middle = (z === 1 && x === 1 && y === 1);
                
                // Calculate column animation offset and scaling
                let elementTransform = '';
                let elementOpacity = 1;
                
                if (reductionAxis === 'y') {
                    // Columns collapse toward left (x=0)
                    const targetOffset = (0 - x) * 23 * reductionProgress;
                    elementTransform = `translateX(${targetOffset}px)`;
                    elementOpacity = x === 0 ? 1 : (1 - reductionProgress * 0.7);
                }
                
                // Add scaling effect for all axes
                const scale = 1 - (reductionProgress * 0.3);
                if (elementTransform) {
                    elementTransform += ` scale(${scale})`;
                } else {
                    elementTransform = `scale(${scale})`;
                }
                
                if (piece) {
                    const color = typeColors[piece.type] || typeColors.default;
                    const borderStyle = piece.highlighted ? 
                        'border: 3px solid #FFFF66;' : 
                        'border: 1px solid #666;';
                    display += `<div style="width: 20px; height: 20px; background-color: ${color}; ${borderStyle} border-radius: 3px; box-sizing: border-box; transform: ${elementTransform}; opacity: ${elementOpacity}; transition: transform 0.1s ease, opacity 0.1s ease;"></div>`;
                } else if (isLayer1Middle) {
                    display += `<div style="width: 20px; height: 20px; background-color: ${typeColors.cheese}; border: 1px solid #666; border-radius: 3px; box-sizing: border-box; transform: ${elementTransform}; opacity: ${elementOpacity}; transition: transform 0.1s ease, opacity 0.1s ease;"></div>`;
                } else {
                    display += `<div style="width: 20px; height: 20px; border: 1px solid #666; border-radius: 3px; box-sizing: border-box; transform: ${elementTransform}; opacity: ${elementOpacity}; transition: transform 0.1s ease, opacity 0.1s ease;"></div>`;
                }
            }
            display += '</div>';
        }
        display += '</div>';
    }
    
    display += '</div>';
    
    aplDisplay.innerHTML = display;
}

window.currentHoveredMesh = null;
window.currentHoveredMeshName = null;

const materialOriginals = new Map();
const HIGHLIGHT_EMISSIVE_HEX = 0xffff66;

function storeOriginalsForMaterial(mat) {
    if (!mat || !mat.uuid) return;
    if (!materialOriginals.has(mat.uuid)) {
        const orig = {};
        if (mat.emissive !== undefined && typeof mat.emissive.getHex === "function") {
            orig.emissive = mat.emissive.getHex();
        }
        if (mat.color !== undefined && typeof mat.color.getHex === "function") {
            orig.color = mat.color.getHex();
        }
        materialOriginals.set(mat.uuid, orig);
    }
}

function applyHighlightToMaterial(mat) {
    if (!mat) return;
    storeOriginalsForMaterial(mat);
    if (mat.emissive !== undefined && typeof mat.emissive.setHex === "function") {
        mat.emissive.setHex(HIGHLIGHT_EMISSIVE_HEX);
    } else if (mat.color !== undefined && typeof mat.color.setHex === "function") {
        mat.color.setHex(HIGHLIGHT_EMISSIVE_HEX);
    }
}

function restoreMaterial(mat) {
    if (!mat || !mat.uuid) return;
    const orig = materialOriginals.get(mat.uuid);
    if (!orig) return;
    
    if (orig.emissive !== undefined && mat.emissive !== undefined && typeof mat.emissive.setHex === "function") {
        mat.emissive.setHex(orig.emissive);
    }
    if (orig.color !== undefined && mat.color !== undefined && typeof mat.color.setHex === "function") {
        mat.color.setHex(orig.color);
    }
}


function highlightMesh(mesh) {
    if (!mesh || !mesh.material) return;
    if (Array.isArray(mesh.material)) {
        mesh.material.forEach(applyHighlightToMaterial);
    } else {
        applyHighlightToMaterial(mesh.material);
    }
}

function restoreMesh(mesh) {
    if (!mesh || !mesh.material) return;
    if (Array.isArray(mesh.material)) {
        mesh.material.forEach(restoreMaterial);
    } else {
        restoreMaterial(mesh.material);
    }
}

let lastHovered = null;

function onPointerMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const mesh = intersects[0].object;
        if (mesh !== lastHovered) {
            if (lastHovered) {
                restoreMesh(lastHovered);
            }
            
            for (let z = 0; z < 4; z++) {
                for (let x = 0; x < 3; x++) {
                    for (let y = 0; y < 3; y++) {
                        if (cakeArray[z][x][y]) {
                            cakeArray[z][x][y].highlighted = false;
                        }
                    }
                }
            }
            
            lastHovered = mesh;
            highlightMesh(mesh);
            
            const currentPos = meshToPosition.get(mesh);
            
            if (currentPos) {
                const arrayElement = cakeArray[currentPos.z][currentPos.x][currentPos.y];
                
                if (arrayElement) {
                    arrayElement.highlighted = true;
                } else {
                    console.warn(`No array element at [Z=${currentPos.z},X=${currentPos.x},Y=${currentPos.y}] for mesh "${mesh.name}"`);
                }
            } else {
                console.warn(`Mesh "${mesh.name}" not found in meshToPosition map`);
            }
            updateAPLDisplay();

            
            window.currentHoveredMesh = mesh;
            window.currentHoveredMeshName = mesh.name || null;

            renderer.domElement.style.cursor = "pointer";
        }
    } else {
        if (lastHovered) {
            restoreMesh(lastHovered);
            
            for (let z = 0; z < 4; z++) {
                for (let x = 0; x < 3; x++) {
                    for (let y = 0; y < 3; y++) {
                        if (cakeArray[z][x][y]) {
                            cakeArray[z][x][y].highlighted = false;
                        }
                    }
                }
            }
            
            updateAPLDisplay();
            
            lastHovered = null;
            window.currentHoveredMesh = null;
            window.currentHoveredMeshName = null;
            renderer.domElement.style.cursor = "default";
        }
    }
}

function onPointerOut() {
    if (lastHovered) {
        restoreMesh(lastHovered);
        lastHovered = null;
    }
    window.currentHoveredMesh = null;
    window.currentHoveredMeshName = null;
    renderer.domElement.style.cursor = "default";
}

renderer.domElement.addEventListener("pointermove", onPointerMove);
renderer.domElement.addEventListener("pointerleave", onPointerOut);
renderer.domElement.addEventListener("pointerdown", onPointerMove); 

loadSeparatedCake(scene, {
    objUrl: "separatedCake.obj",
    mtlUrl: "separatedCake.mtl",
    onLoad: (root) => {
        cakeRoot = root; // Store for animation access
        const box = new THREE.Box3().setFromObject(root);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        const center = box.getCenter(new THREE.Vector3());

        root.position.sub(center);

        const radius = sphere.radius;
        const camDist = Math.max(radius * 3.0, 3.0);
        camera.position.set(camDist * 0.7, radius * 1.5, camDist * 0.7);
        camera.near = Math.max(0.1, radius / 100);
        camera.far = Math.max(1000, camDist * 10);
        camera.updateProjectionMatrix();

        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();
    },
    onError: (err) => console.error(err)
});

let animationFrame = 0;

// Animation parameters for reduction
let reductionAxis = 'z'; // 'x', 'y', or 'z' - which axis to reduce along
let reductionProgress = 0; // 0 to 1, where 1 is fully reduced

function animateReduction() {
    if (!cakeRoot) return;
    
    // Calculate animation progress (0 to 1 and back)
    const cycle = animationFrame / 600; // Full cycle over 600 frames
    reductionProgress = Math.abs(Math.sin(cycle * Math.PI)); // Smooth oscillation
    
    cakeRoot.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
            const meshPos = meshToPosition.get(child);
            if (!meshPos) return;
            
            // Store original transform if not already stored
            if (!child.userData.originalPosition) {
                child.userData.originalPosition = child.position.clone();
                child.userData.originalScale = child.scale.clone();
            }
            
            const original = child.userData.originalPosition;
            const originalScale = child.userData.originalScale;
            
            // Reset to original transform
            child.position.copy(original);
            child.scale.copy(originalScale);
            
            if (reductionAxis === 'y') {
                // Reduce along Z-axis (layers): squish towards bottom layer
                const targetZ = 0; // Bottom layer position
                child.position.z = THREE.MathUtils.lerp(original.z, targetZ, reductionProgress);
                child.scale.z = THREE.MathUtils.lerp(originalScale.z, 0.1, reductionProgress);
                
            } else if (reductionAxis === 'x') {
                // Reduce along Y-axis (rows): squish towards front row
                const targetY = 0;
                child.position.y = THREE.MathUtils.lerp(original.y, targetY, reductionProgress);
                child.scale.y = THREE.MathUtils.lerp(originalScale.y, 0.1, reductionProgress);
                
            } else if (reductionAxis === 'z') {
                // Reduce along X-axis (columns): squish towards left column
                const targetX = 0;
                child.position.x = THREE.MathUtils.lerp(original.x, targetX, reductionProgress);
                child.scale.x = THREE.MathUtils.lerp(originalScale.x, 0.1, reductionProgress);
            }
        }
    });
}

function animate() {
    animationFrame = (animationFrame + 1) % 600;
    
    if(window.reductionAxis && window.reductionAxis !== reductionAxis) {
        reductionAxis = window.reductionAxis;
    }

    // Update reduction animation
    animateReduction();
    
    // Update APL display to match 3D animation
    updateAPLDisplay();
    
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Keyboard controls for changing reduction axis
window.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case 'x':
            reductionAxis = 'x';
            console.log('Reducing along X-axis (columns)');
            window.reductionAxis = reductionAxis;
            break;
        case 'y':
            reductionAxis = 'y';
            console.log('Reducing along Y-axis (rows)');
            window.reductionAxis = reductionAxis;
            break;
        case 'z':
            reductionAxis = 'z';
            console.log('Reducing along Z-axis (layers)');
            window.reductionAxis = reductionAxis;   
            break;
    }
});

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});