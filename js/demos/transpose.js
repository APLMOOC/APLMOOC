import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth / 2, window.innerHeight);
document.body.appendChild(renderer.domElement);


const rendererT = new THREE.WebGLRenderer({antialias: true});
rendererT.setSize(window.innerWidth / 2, window.innerHeight);
document.body.appendChild(rendererT.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x444444);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / ( 2 *window.innerHeight), 0.1, 1000);
camera.far = 100;
camera.viewport = new THREE.Vector4(0, 0, innerWidth / 2, innerHeight);
camera.updateProjectionMatrix();
camera.position.set(25.82372197987948, 26.03410011657629, 25.92586386021308);
camera.rotation.set(-0.7874812306578431, 0.612637675429355, 0.5236571287580409);

const controls = new OrbitControls( camera, renderer.domElement );

controls.update();

const light = new THREE.DirectionalLight(0xffffff, 3);
// //const ambient = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);
// //scene.add(ambient);

function createOrb(size, color) {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: color, transparent: true, opacity: 0.8, roughness: 0.5 });
    const orb = new THREE.Mesh(geometry, material);
    return orb;
}

const last = 5;
const rows = 5;
const cols = 5;
const spacing = 5;
const center = new THREE.Vector3((cols-1)*spacing/2, (rows-1)*spacing/2, (last-1)*spacing/2);
for(let k = 0; k < last; k++){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const size = 0.5 + (j + k*cols + (rows-i)*rows*cols) * 0.01;
            const color = new THREE.Color(`hsl(${(k + j*cols + (rows-i)*rows*cols) * 2}, 100%, 50%)`);
            const orb = createOrb(size, color);
            orb.position.set(...new THREE.Vector3(j * spacing, i * spacing, k * spacing).sub(center));
            scene.add(orb);
            
        }
    }
}

const cameraT = new THREE.PerspectiveCamera(75, window.innerWidth / (2 * window.innerHeight), 0.1, 1000);
cameraT.far = 100;
cameraT.viewport = new THREE.Vector4(innerWidth / 2, 0, innerWidth / 2, innerHeight);
cameraT.updateProjectionMatrix();
cameraT.position.set(125.82372197987948, 126.03410011657629, 125.92586386021308);
cameraT.rotation.set(-0.7874812306578431, 0.612637675429355, 0.5236571287580409);

const controlsT = new OrbitControls( cameraT, renderer.domElement );

controlsT.update();

const lightT = new THREE.DirectionalLight(0xffffff, 3);
//const ambient = new THREE.AmbientLight(0xffffff, 3);
scene.add(lightT);
//scene.add(ambient);


for(let k = 0; k < last; k++){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const size = 0.5 + (j + k*cols + (rows-i)*rows*cols) * 0.01;
            const color = new THREE.Color(`hsl(${(k + j*cols + (rows-i)*rows*cols) * 2}, 100%, 50%)`);
            const orb = createOrb(size, color);
            orb.position.set(...new THREE.Vector3(i * spacing + 100, j * spacing + 100, k * spacing + 100).sub(center));
            scene.add(orb);
            
        }
    }
}


const arrowLength = 5;
const arrowHeadLength = 1;
const arrowHeadWidth = 0.5;

const xAxis = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0xff0000, arrowHeadLength, arrowHeadWidth);
const yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x00ff00, arrowHeadLength, arrowHeadWidth);
const zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x0000ff, arrowHeadLength, arrowHeadWidth);


scene.add(xAxis);
scene.add(yAxis);
scene.add(zAxis);

const xAxisT = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), center.clone().add(new THREE.Vector3(101,101,101)), arrowLength, 0xff0000, arrowHeadLength, arrowHeadWidth);
const yAxisT = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), center.clone().add(new THREE.Vector3(101,101,101)), arrowLength, 0x00ff00, arrowHeadLength, arrowHeadWidth);
const zAxisT = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), center.clone().add(new THREE.Vector3(101,101,101)), arrowLength, 0x0000ff, arrowHeadLength, arrowHeadWidth);


scene.add(xAxisT);
scene.add(yAxisT);
scene.add(zAxisT);


// function logCameraPositionAndRotation() {
//     console.log(`Camera Position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
//     console.log(`Camera Rotation: x=${camera.rotation.x}, y=${camera.rotation.y}, z=${camera.rotation.z}`);
// }

// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Space') {
//         logCameraPositionAndRotation();
//     }
// });


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let label = null;
let labelT = null;

function createTextSprite(text, position) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 30px Arial';
    context.fillStyle = 'white';
    context.fillText(text, 0, 30);
    const texture = new THREE.CanvasTexture(canvas);

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(12, 6, 1); 
    sprite.position.copy(position);
    return sprite;
}

function onDocumentMouseDown(event) {
    event.preventDefault();

    if (label) {
        scene.remove(label);
        scene.remove(labelT);
        label = null;
    }

    mouse.x = (event.clientX * 2 / (window.innerWidth)) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        let intersectedOrb = intersects[0].object;
        let index = 0;
        console.log(intersectedOrb.type);
        while(intersectedOrb.type=="Line"){
            index++;
            intersectedOrb = intersects[index].object;
        }
        const position = intersectedOrb.position;
        label = createTextSprite(`(${position.x/5+3}, ${position.z/5+3}, ${5-(position.y/5+3)+1})`, position.clone().add(new THREE.Vector3(0, -1, 0)));
        labelT = createTextSprite(`(${position.z/5+3}, ${position.x/5+3}, ${5-(position.y/5+3)+1})`, new THREE.Vector3(position.y, position.x, position.z).add(new THREE.Vector3(100, 100-1, 100)));
        scene.add(label);
        scene.add(labelT);
    }
}

document.addEventListener('mousedown', onDocumentMouseDown, false);



function animate() {
    light.position.set(...camera.position);
    light.rotation.set(...camera.rotation);

    cameraT.position.set(...(camera.position.clone().add(new THREE.Vector3(100,100,100))));
    cameraT.rotation.set(...(camera.rotation.clone()));
    lightT.position.set(...(camera.position.clone().add(new THREE.Vector3(100,100,100))));
    lightT.rotation.set(...camera.rotation);
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    rendererT.render(scene, cameraT);
    controls.update();
    controlsT.update();
}

animate();

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / (window.innerHeight);
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });