//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8B21E4); 
scene.fog = new THREE.Fog(0x161616, 1, 3);


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

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x2CC1F0, wireframe:true } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 50;

//animacion
function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.05;
    torus.rotation.z += 0.02;
    renderer.render( scene, camera );
}
animate();