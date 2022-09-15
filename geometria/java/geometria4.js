//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x525C5F); 


var loader = new  THREE.TextureLoader();
loader.load(
     function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe:true} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 5;

//animacion
function animate() {
    requestAnimationFrame( animate );
    capsule.rotation.x += 0.04;
    capsule.rotation.y += 0.02;
    capsule.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();