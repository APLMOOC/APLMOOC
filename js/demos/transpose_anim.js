import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x444444);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / ( window.innerHeight), 0.1, 1000);
camera.far = 100;
camera.viewport = new THREE.Vector4(0, 0, innerWidth, innerHeight);
camera.updateProjectionMatrix();
camera.position.set(25.82372197987948, 26.03410011657629, 25.92586386021308);
camera.rotation.set(-0.7874812306578431, 0.612637675429355, 0.5236571287580409);

const controls = new OrbitControls( camera, renderer.domElement );

controls.update();

const light = new THREE.DirectionalLight(0xffffff, 3);
// //const ambient = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);
// //scene.add(ambient);

let orbs = []

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
const center = new THREE.Vector3((cols-1)*spacing, (rows-1)*spacing, (last-1)*spacing);
for(let k = 0; k < last; k++){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const size = 0.5 + (j + k*cols + (rows-i)*rows*cols) * 0.01;
            const color = new THREE.Color(`hsl(${(k + j*cols + (rows-i)*rows*cols) * 2}, 100%, 50%)`);
            const orb = createOrb(size, color);
            orb.position.set(...new THREE.Vector3(j * spacing, i * spacing, k * spacing).sub(center));
            orb.name=`${i} ${j} ${k}`;
            orbs.push(orb);
            scene.add(orb);
            
        }
    }
}


const arrowLength = 5;
const arrowHeadLength = 1;
const arrowHeadWidth = 0.5;



// function logCameraPositionAndRotation() {
//     console.log(`Camera Position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
//     console.log(`Camera Rotation: x=${camera.rotation.x}, y=${camera.rotation.y}, z=${camera.rotation.z}`);
// }

// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Space') {
//         logCameraPositionAndRotation();
//     }
// });

let xAxis = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0xff0000, arrowHeadLength, arrowHeadWidth);
let yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x00ff00, arrowHeadLength, arrowHeadWidth);
let zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x0000ff, arrowHeadLength, arrowHeadWidth);


let clock = new THREE.Clock();
let direction = 1;

function animate() {
    requestAnimationFrame(animate);
    scene.remove(xAxis);
    scene.remove(yAxis);
    scene.remove(zAxis);

    light.position.set(...camera.position);
    light.rotation.set(...camera.rotation);
    
    let elapsedTime = clock.getElapsedTime() * 1000;
    let theta = (elapsedTime % 10000) / 10000;

    xAxis = new THREE.ArrowHelper(new THREE.Vector3(0,-0.999,0).lerp(new THREE.Vector3(-1,0,0), 0.5+0.5*Math.sin(2*Math.PI*(theta+0.1))), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0xff0000, arrowHeadLength, arrowHeadWidth);
    yAxis = new THREE.ArrowHelper(new THREE.Vector3(-1,0,0).lerp(new THREE.Vector3(0,-0.999,0), 0.5+0.5*Math.sin(2*Math.PI*(theta+0.1))), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x00ff00, arrowHeadLength, arrowHeadWidth);
    zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), center.clone().add(new THREE.Vector3(1,1,1)), arrowLength, 0x0000ff, arrowHeadLength, arrowHeadWidth);

        
    scene.add(xAxis);
    scene.add(yAxis);
    scene.add(zAxis);

    orbs.forEach((orb,i) => {
        const initial_position = new THREE.Vector3(...orb.name.split(" ").map(Number).map(x=>x*5));
        const final_position = new THREE.Vector3(initial_position.y, initial_position.x, initial_position.z);


        orb.position.lerpVectors(initial_position, final_position, 0.5+0.5*Math.sin(2*Math.PI*(theta+i/1000)));
    });


    renderer.render(scene, camera);
}

animate();

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / (window.innerHeight);
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });