//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8B21E4); 
scene.fog = new THREE.Fog(0x161616, 3, 6);


var loader = new  THREE.TextureLoader();
loader.load(
    '../img/fondo4.jpeg', function(texture){
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

const geometry = new THREE.SphereGeometry( 2, 50, 50 );
const material = new THREE.MeshBasicMaterial( { color: 0xE22592, wireframe:true } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;

//animacion
function animate() {
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;
    sphere.rotation.z += 0.02;
    renderer.render( scene, camera );
}
animate();