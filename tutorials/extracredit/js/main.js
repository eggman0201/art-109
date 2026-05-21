// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//add lgiht
const light = new THREE.DirectionalLight(0xffffff, 5)
light.position.set(3,4,5);
scene.add(light);

const helper = new THREE.DirectionalLightHelper( light, 5 );
scene.add(helper);


const lightL = new THREE.DirectionalLight(0xff0000, 5)
light.position.set(-3,4,5);
scene.add(lightL);

const helperL = new THREE.DirectionalLightHelper( lightL, 5 );
scene.add(helperL);



//icl idk what this is
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//initiate addons
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

loader.load('assets/dog_shiny.gltf', function(gltf){
    const dog = gltf.scene;
    scene.add(dog);
    dog.scale.set(2,2,2);
})


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg')
const material = new THREE.MeshStandardMaterial({map: texture})
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;

  renderer.render( scene, camera );

}