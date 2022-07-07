/* Author: Ralph Louis Gopez
 * This is a very long file and I did what I can
 * to organize the logic and everything,
 * so it is split into these parts:
 * - Preloading of Textures
 * - Rendering of Sphere
 * - Sphere and W Controls
 */

let w = 0; // I don't really need this when I think about it but whatever
let originIndex; // will have the index of the one with w is equal to 0

// START Preloading of Textures 
// this loads all the textures
const manager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(manager);

// in essence these are all textures
const textures = []; // front side textures
const displacements = []; // displacement maps
const inners = []; // backside textures aka inside for hollow planets

const loadingWidget = document.querySelector("#loading-widget");

// this should run per item being loaded
manager.onProgress = function(url, loaded, total) {
	loadingWidget.innerText = `Loading ${loaded} out of ${total}`;
}

// would run when everything has loaded
manager.onLoad = function() {
	loadingWidget.innerText = `All ${textures.length} textures have been loaded.`;
	loadingWidget.remove();
	start();
}

// load all textures in the database
DATABASE.forEach(function(entry, index) {
	// the way I assign it looks stupid, but
	// hey in javascript, it works
	if (entry.w === 0) originIndex = index;
	
	loader.load(entry.texture, function(texture) {
		// this makes it so that the texture is pixelated instead of blurry when low quality
		texture.minFilter = THREE.NearestFilter;
		texture.magFilter = THREE.NearestFilter;
		textures[index] = texture;
	});
	
	// a heinous crime, bad code but it works
	if (entry.displacement) loader.load(entry.displacement, function(texture) {
		displacements[index] = texture;
	});
	
	// yet another heinous crime, part two
	if (entry.inner) loader.load(entry.inner, function(texture) {
		// same thing as the first loader code but this is for inner textures
		texture.minFilter = THREE.NearestFilter;
		texture.magFilter = THREE.NearestFilter;
		inners[index] = texture;
	});
	
});

// END Preloading of Textures

function start() {
	// START Rendering of Sphere
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	
	// fullscreen
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	// you need to add the canvas to the DOM for it to appear
	document.body.appendChild(renderer.domElement);
	
	// this is the creation of the sphere
	const geometry = new THREE.SphereGeometry(1, 256, 128);
	
	const material = new THREE.MeshStandardMaterial({
		side: THREE.FrontSide,
		transparent: true
	});
	
	const sphere = new THREE.Mesh(geometry, material);
	
	const inner = sphere.clone();
	inner.material = new THREE.MeshStandardMaterial({
		side: THREE.BackSide,
		transparent: true
	});
	
	// this was the fix, I wanna disappear now
	sphere.renderOrder = 2;
	inner.renderOrder = 1;
	
	scene.add(sphere);
	scene.add(inner);
	
	camera.position.z = 80;
	
	// lighting code that I barely understand
	// well just tweak it and stuff, honestly I don't know much about this
	const spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0, 0, 200);
	spotLight.castShadow = true;
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 45;
	spotLight.intensity = 1.5;
	scene.add(spotLight);
	
	// animation loop basically runs repeatedly to create every single frame
	function animate() {
		requestAnimationFrame(animate);
		
		// rotation code well rotates the thing automatically
		sphere.rotation.x += 0.01;
		sphere.rotation.y += 0.01;
		inner.rotation.x += 0.01;
		inner.rotation.y += 0.01;
		
		// when the w-value is too small we want the sphere to be visible
		sphere.visible = -179 <= w && w <= 180;
		//sphere.visible = false
		renderer.render(scene, camera);
	}
	
	animate();
	// END Rendering of Spheee
	
	// START Sphere and W Controls
	const input = document.querySelector("#w-slider");
	const wlevel = document.querySelector("#w-level");
	const name = document.querySelector("#name");
	
	// slider event listener also changes the text of the UI
	input.addEventListener('input', function() {
		w = this.value;
		wlevel.innerText = `w-level = ${w}`;
		
		// finds the corresponding entry and retextures the sphere accordingly
		for (let index = DATABASE.length - 1; index >= 0; --index) {
			let entry = DATABASE[index];
			if (this.value >= entry.w) {
				updatePlane(this.value, index, entry.inner);
				name.innerText = "";
				
				if (entry.name) name.innerText = `, name: ${entry.name}`;
				break;
			}
		}
	});
	
	// function that allows us to change the sphere textures in real time
	function updatePlane(w, index, hasInner) {
		sphere.material.map = textures[index];
		sphere.material.displacementMap = null;
		
		// displacement map, that well changes the vertices actually
		if (displacements[index]) { 
			sphere.material.displacementMap = displacements[index];
			sphere.material.displacementScale = 0.2;
		}
		
		// this is used to make sure that the material is updated
		sphere.material.needsUpdate = true;
		
		inner.visible = false; // by default inner shouldn't be visible
		if (hasInner) updateInner(w, index);
		
		// obviously changes the size of the sphere
		sphere.scale.setScalar(computeSize(w) * 1.01);
	}
	
	// this is used to update inner texture, only use if there is an inner texture
	function updateInner(w, index) {
		inner.material.map = inners[index];
		inner.visible = true;
		inner.material.needsUpdate = true;
		inner.scale.setScalar(computeSize(w) * 0.99);
	}
	
	// this computes the size of the sphere according to the current w-value
	function computeSize(w) {
		let scale = (w+1) / 180;
		scale = (-(scale * scale)/7 + 10);
		return Math.max(scale, 0.1)
	}
	
	updatePlane(0, originIndex, false);
}
