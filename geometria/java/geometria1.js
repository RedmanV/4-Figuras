//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8B21E4); 
scene.fog = new THREE.Fog(0xBDBDBD, 3, 6);
const material = new THREE.LineBasicMaterial({
	color: 0x000000
});

var loader = new  THREE.TextureLoader();
loader.load(
    '../img/fondo2.jpeg', function(texture){
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

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xDA24EC} );
const cube = new THREE.Mesh( geometry, material2 );
scene.add( cube );

camera.position.z = 5;

//line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );  

//animacion
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.1;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.1;


    renderer.render( scene, camera );
}
animate();