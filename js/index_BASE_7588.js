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
// this loads all the textures, lol
const manager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(manager);

// should contain all textures inside, outside, and even displacement maps
const resources = new Array(PLANETS.length);

// well isn't this kinda obvious
const loadingWidget = document.querySelector("#loading-widget");

// this should run per item being loaded
manager.onProgress = function(url, loaded, total) {
	loadingWidget.innerText = `Loading ${loaded} out of ${total}`;
}

// would run when everything has loaded
manager.onLoad = function() {
	loadingWidget.innerText = `All ${resources.length} textures have been loaded.`;
	loadingWidget.remove();
	start();
}

// load all textures in the database
PLANETS.forEach(function(entry, index) {
	// the way I assign it looks stupid, but
	// hey in javascript, it works
	if (entry.w === 0) originIndex = index;
	resources[index] = {};
	
	loader.load(entry.texture, function(texture) {
		// this makes it so that the texture is pixelated instead of blurry when low quality
		texture.minFilter = THREE.NearestFilter;
		texture.magFilter = THREE.NearestFilter;
		resources[index].outside = texture;
		// textures[index] = texture;
	});
	
	// a heinous crime, bad code but it works
	if (entry.displacement) loader.load(entry.displacement, function(texture) {
		// displacements[index] = texture;
		resources[index].displacement = texture;
	});
	
	// yet another heinous crime, part two
	if (entry.inner) loader.load(entry.inner, function(texture) {
		// same thing as the first loader code but this is for inner textures
		texture.minFilter = THREE.NearestFilter;
		texture.magFilter = THREE.NearestFilter;
		// inners[index] = texture;
		resources[index].inside = texture;
	});
	
});

// END Preloading of Textures

function start() {
	// START Rendering of Sphere
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	
	// code for the orbit controls that makes it really easy to control camera by touch or mouse
	const controls = new THREE.OrbitControls( camera, renderer.domElement);
	
	controls.autoRotate = true;
	controls.autoRotateSpeed = 6;
	controls.enablePan = false;
	
	// refers to the zoom distances of our camera controlled by the orbitcontrol
	controls.minDistance = 10;
	controls.maxDistance = 80;
	
	// fullscreen canvas
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	// you need to add the canvas to the DOM for it to appear
	document.body.appendChild(renderer.domElement);
	
	// this is the creation of the sphere
	const geometry = new THREE.SphereGeometry(1, 256, 128);
	
	// as you can see the sphere has two sides well as in, inside and outside
	const material = new THREE.MeshStandardMaterial({
		side: THREE.FrontSide,
		displacementScale: 0.05,
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
	scene.add(camera);
	
	camera.position.z = 80;
	
	// lighting code that I barely understand
	// well just tweak it and stuff, honestly I don't know much about this
	const spotLight = new THREE.SpotLight(0xffffff);
	
	spotLight.position.set(0, 0, 1);
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 5000;
	spotLight.shadow.camera.fov = 10;
	spotLight.intensity = 1.5;
	
	camera.add(spotLight);
	spotLight.target = camera;
	/*
	// ambient light lights everything up
	// easy to use, easy to understand
	const ambientLight = new THREE.AmbientLight(0x404040);
	ambientLight.intensity = 4;
	scene.add(ambientLight)*/
	
	
	// animation loop basically runs repeatedly to create every single frame
	function animate() {
		requestAnimationFrame(animate);
		
		// when the w-value is too small we want the sphere to be invisible
		sphere.visible = -179 <= w && w <= 180;
		
		controls.update();
		renderer.render(scene, camera);
	}
	
	animate();
	// END Rendering of Spheee
	
	// START Sphere and W Controls
	// forgive the inconsistensies in my naming, well change their names if you fancy
	const input = document.querySelector("#w-slider");
	const wlevel = document.querySelector("#w-level");
	const nameDOM = document.querySelector("#name");
	const descriptionDOM = document.querySelector("#description-widget");
	const regionDOM = document.querySelector("#region-widget");
	
	// slider event listener also changes the text of the UI
	input.addEventListener('input', function() {
		w = this.value;
		wlevel.innerText = `w-level = ${w}`;
		
		// finds the corresponding entry and retextures the sphere accordingly
		for (let index = PLANETS.length - 1; index >= 0; --index) {
			let entry = PLANETS[index];
			if (this.value >= entry.w) {
				updatePlane(w, index);
				updateWidgets(w, entry);
				break;
			}
		}
	});
	
	// helper function that returns true if x is between start and end regardless of x's sign
	function between(x, start, end) {
		return ((x-start)*(x-end) <= 0);
	}
	
	// function to update the DOM elements with the right values
	function updateWidgets(w, entry) {
		// obviously clear out their current values
		nameDOM.innerText = "";
		descriptionDOM.innerText = "";
		regionDOM.innerText = "";
		
		// optional fields
		if (entry.name) nameDOM.innerText = `, name: ${entry.name}`;
		if (entry.description) descriptionDOM.innerText = `Description:\n${entry.description}`;
		
		// figures out the region to use
		for (let index = 0; index < REGIONS.length; ++index) {
			let { start, end, name } = REGIONS[index];
			// kinda bad practice to use that global variable I think but whatever
			if (between(w, start, end)) {
				regionDOM.innerText = `Region: ${name}`;
				break;
			}
		}
	}
	
	// function that allows us to change the sphere textures in real time
	function updatePlane(w, index) {
		let { outside, displacement, inside } = resources[index];
		sphere.material.map = outside
		sphere.material.displacementMap = null;
		
		// displacement map, that well changes the vertices actually
		if (displacement) sphere.material.displacementMap = displacement
		
		// this is used to make sure that the material is updated
		sphere.material.needsUpdate = true;
		
		inner.visible = false; // by default inner shouldn't be visible
		if (inside) {
			inner.material.map = inside;
			inner.visible = true;
			inner.material.needsUpdate = true;
			inner.scale.setScalar(computeSize(w) * 0.99);
		}
		
		// obviously changes the size of the sphere
		sphere.scale.setScalar(computeSize(w) * 1.01);
	}
	
	// this computes the size of the sphere according to the current w-value
	function computeSize(w) {
		let scale = (w + 1) / 180;
		scale = (-Math.pow(scale, 2)/7 + 15);
		return Math.max(scale, 0.1);
	}
	
	// well we need this to make sure stuff is right
	updatePlane(0, originIndex);
	updateWidgets(0, PLANETS[originIndex]);
}
