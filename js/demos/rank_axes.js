import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x444444);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / ( window.innerHeight), 0.1, 1000);
camera.far = 1000;
camera.viewport = new THREE.Vector4(0, 0, innerWidth, innerHeight);
camera.updateProjectionMatrix();
camera.position.set(25.82372197987948 / 2, 26.03410011657629 / 2, 25.92586386021308 / 2);
camera.rotation.set(-0.7874812306578431, 0.612637675429355, 0.5236571287580409);

const controls = new OrbitControls( camera, renderer.domElement );

controls.update();

const light = new THREE.DirectionalLight(0xffffff, 3);
// //const ambient = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);
// //scene.add(ambient);

let orbs = []
let labels = []

function createAxes(){
    xAxis = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), center.clone().multiplyScalar(-0.5).add(new THREE.Vector3(-3,-3,-3)), arrowLength, 0xff0000, arrowHeadLength, arrowHeadWidth);
    yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), center.clone().multiplyScalar(-0.5).add(new THREE.Vector3(-3,-3,-3)), arrowLength, 0x00ff00, arrowHeadLength, arrowHeadWidth);
    zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), center.clone().multiplyScalar(-0.5).add(new THREE.Vector3(-3,-3,-3)), arrowLength, 0x0000ff, arrowHeadLength, arrowHeadWidth);

}

function createOrb(size, color) {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: color, transparent: true, opacity: 0.8, roughness: 0.5 });
    const orb = new THREE.Mesh(geometry, material);
    return orb;
}

function createTextSprite(text, position, width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d');
    context.font = 'Bold 30px Arial';
    context.fillStyle = 'white';
    context.fillText(text, 0, 30);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.copy(position);

    return sprite;
}

const last = 3;
const rows = 3;
const cols = 3;
const spacing = 5;
const center = new THREE.Vector3((cols-1)*spacing, (rows-1)*spacing, (last-1)*spacing);
var array = [[[5,2,4],[9,1,4],[5,8,4]],[[9,5,8],[5,2,2],[3,2,5]],[[2,9,4],[7,2,10],[7,10,6]]];

for(let i = 0; i < last; i++){
    for (let j = 0; j < cols; j++) {
        for (let k = 0; k < rows; k++) {
            
            const color = new THREE.Color(`hsl(${array[i][j][k]*360/20}, 56%, 47%)`);//new THREE.Color(`hsl(${(k + j*cols + (rows-i)*rows*cols) * 2}, 100%, 50%)`);
            
            const orb = createOrb(1, color);
            
            orb.position.set(...new THREE.Vector3(i * spacing, j * spacing, k * spacing).sub(center.clone().multiplyScalar(0.5)));

            const size = array[i][j][k]/7;
            orb.scale.set(...new THREE.Vector3(size,size,size));
            orb.name=`${i} ${j} ${k}`;
            orbs.push(orb);
            scene.add(orb);
            // const labelPosition = orb.position.clone().add(new THREE.Vector3(0,2,0));
            // const textSprite = createTextSprite(`${array[i][j][k]}`, labelPosition, 30, 30);
            // textSprite.name=`${i} ${j} ${k}`
            // if(i*j*k!=0) textSprite.renderOrder=10;
            // scene.add(textSprite);
            // labels.push(textSprite);

            const labelPosition2 = orb.position.clone().add(new THREE.Vector3(0,2,0));
            const textSprite2 = createTextSprite(`(${i+1},${j+1},${k+1}) ${array[i][j][k]}`, labelPosition2, 130, 30);
            textSprite2.name=`${i} ${j} ${k}`
            textSprite2.scale.add(new THREE.Vector3(3,0,0))
            if(i*j*k==0){ 
                scene.add(textSprite2); 
                labels.push(textSprite2);
            }
        }
    }
}

const geometry = new THREE.BoxGeometry( rows*spacing+0.1, spacing, rows*spacing+0.1 ); 
const material = new THREE.MeshStandardMaterial( {color: 0x00ff00, transparent: true, opacity: 0.3 } ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.add(new THREE.Vector3(0,-spacing,0));
cube.renderOrder = 1;
scene.add( cube );


const geometry1 = new THREE.BoxGeometry( rows*spacing+0.1, rows*spacing+0.1, spacing ); 
const material1 = new THREE.MeshStandardMaterial( {color: 0x0000ff, transparent: true, opacity: 0.3 } ); 
const cube1 = new THREE.Mesh( geometry1, material1 ); 
cube1.position.add(new THREE.Vector3(0,0,-spacing));
cube1.renderOrder = 2;
scene.add( cube1 );


const geometry2 = new THREE.BoxGeometry( spacing, rows*spacing+0.1, rows*spacing+0.1 ); 
const material2 = new THREE.MeshStandardMaterial( {color: 0xff0000, transparent: true, opacity: 0.3 } ); 
const cube2 = new THREE.Mesh( geometry2, material2 ); 
cube2.position.add(new THREE.Vector3(-spacing,0,0));
cube2.renderOrder = 3;
scene.add( cube2 );


const arrowLength = 5;
const arrowHeadLength = 1;
const arrowHeadWidth = 0.5;



function logCameraPositionAndRotation() {
    console.log(`Camera Position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
    console.log(`Camera Rotation: x=${camera.rotation.x}, y=${camera.rotation.y}, z=${camera.rotation.z}`);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        logCameraPositionAndRotation();
    }
});

let xAxis, yAxis, zAxis;

let clock = new THREE.Clock();

function delayed_lerp(delay, t, initial, final){
    var xi = initial.clone();
    var xf = final.clone();
    if(t > delay){
        t = (t - delay) / (1 - delay);
        return xi.multiplyScalar(1 - t).add(xf.multiplyScalar(t));
    }
    return initial;
}

function llerp(delay, t, initial, final) {
    var xi = initial;
    var xf = final;
    if (t > delay) {
        t = (t - delay) / (1 - delay);
        return xi * (1 - t) + xf * t;
    }
    return initial;
}

function stepwise_sum(numbers) {

    return function (t) {
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            var currentSum = numbers.slice(0, i + 1).reduce((a, b) => a + b, 0);
            var nextSum = numbers.slice(0, i + 2).reduce((a, b) => a + b, 0);
            var start = i;
            var end = (i + 1);

            if (t < start) {
                break;
            } else if (t >= start && t <= end) {
                sum = llerp(0, (t%1)*(t%1), currentSum, nextSum);
                break;
            } else {
                sum = nextSum;
            }
        }
        return sum;
    };
}

function delayed_quad(delay, t, initial, final){
    var xi = initial.clone();
    var xf = final.clone();
    if(t > delay){
        t = (t-delay)/(1-delay);
        return xi.multiplyScalar(1-t*t).add(xf.multiplyScalar(t*t));
    }
    return initial;
}

let orb_map = new Object();

function animate() {
    requestAnimationFrame(animate);
    scene.remove(xAxis);
    scene.remove(yAxis);
    scene.remove(zAxis);

    light.position.set(...camera.position);
    light.rotation.set(...camera.rotation);
    
    let elapsedTime = clock.getElapsedTime() * 1000;
    let time = elapsedTime / 10000;

    createAxes();
    
    scene.add(xAxis);
    scene.add(yAxis);
    scene.add(zAxis);

    orbs.forEach((orb,i) => {
        // const id = new THREE.Vector3(...orb.name.split(" ").map(Number));
        // const initial_position = new THREE.Vector3(...orb.name.split(" ").map(Number).map(x=>x*spacing)).sub(center.clone().multiplyScalar(0.5));
        // const final_position = new THREE.Vector3(spacing*2, initial_position.y, initial_position.z);

        // orb.position.set(...initial_position);

        // if(id.x == 0) {
        //     orb.position.set(...delayed_lerp(id.x/rows, time, initial_position, final_position));
        // } else if(llerp(id.x/rows, time, 0, 1) > 0){
        //     orb.position.set(100, 100, 100);

        // }

        // var final_size;
        // if(id.x == 0) final_size = new THREE.Vector3(2, 2, 2);
        
        // var tmp_array = []
        // for(var i = 0; i < last; i++){
        //     tmp_array.push(array[i][id.y][id.z]);
        // }
        
        // var delayed_sum = stepwise_sum(tmp_array);
        // if(id.x == 0) orb.scale.set(...new THREE.Vector3(delayed_sum(time*3)/7, delayed_sum(time*3)/7, delayed_sum(time*3)/7));
        // orb.material.color.set(new THREE.Color(`hsl(${orb.scale.x*360/5}, 56%, 47%)`));
        // //if(id.x == 0) orb.material.color.set(`hsl(${316*(1-time*time)+260*time*time}, 56%, 47%)`);
        orb_map[orb.name]=orb;
    });
    
    labels.forEach((label, i) => {
        const id = new THREE.Vector3(...label.name.split(" ").map(Number));
        label.material.color = orb_map[label.name].material.color;
    })


    renderer.render(scene, camera);
    controls.update();
}

animate();
