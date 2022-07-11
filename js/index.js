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
let rotateInside;

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
	});
	
	// a heinous crime, bad code but it works
	if (entry.displacement) loader.load(entry.displacement, function(texture) {
		resources[index].displacement = texture;
	});
	
	// yet another heinous crime, part two
	if (entry.inner) loader.load(entry.inner, function(texture) {
		// same thing as the first loader code but this is for inner textures
		texture.minFilter = THREE.NearestFilter;
		texture.magFilter = THREE.NearestFilter;
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
	const planetGeometry = new THREE.SphereGeometry(1, 256, 128);
	
	// as you can see the sphere has two sides well as in, inside and outside
	const outerMaterial = new THREE.MeshStandardMaterial({
		side: THREE.FrontSide,
		displacementScale: 0.05,
		transparent: true
	});
	
	const outerMesh = new THREE.Mesh(planetGeometry, outerMaterial);
	
	const innerMesh = outerMesh.clone();
	innerMesh.material = new THREE.MeshStandardMaterial({
		side: THREE.BackSide,
		transparent: true
	});
	
	// this was the fix, I wanna disappear now
	outerMesh.renderOrder = 2;
	innerMesh.renderOrder = 1;
	
	// this code part now adds stars
	const starGeometry = new THREE.BufferGeometry();
	const starArray = [];
	for(let index = 0; index < 7000; index++) {
		let star = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
		starArray.push(star);
	}

	// basically one geometry but made up of "points"
	starGeometry.setFromPoints(starArray);
	
	let starMaterial = new THREE.PointsMaterial({
	  	color: 0xaaaaaa,
	  	size: 0.7,
	});
	
	// this is just one object so the all stars would get affected when modified
	let starObject = new THREE.Points(starGeometry, starMaterial);
	scene.add(starObject);

	scene.add(outerMesh);
	scene.add(innerMesh);
	scene.add(camera);
	
	camera.position.z = 80;
		
	// ambient light lights everything up
	// easy to use, easy to understand
	const ambientLight = new THREE.AmbientLight(0x404040);
	ambientLight.intensity = 4;
	scene.add(ambientLight)
	
	
	// animation loop basically runs repeatedly to create every single frame
	function animate() {
		requestAnimationFrame(animate);
		
		// when the w-value is too small we want the whole sphere to be invisible
		outerMesh.visible = -179 <= w && w <= 180;

		if (rotateInside) {
			innerMesh.rotation.x += 0.01;
			innerMesh.rotation.y += 0.01;
		}

		controls.update();
		renderer.render(scene, camera);
	}
	
	animate();
	// END Rendering of Spheee
	
	// START Sphere and W Controls
	// forgive the inconsistensies in my naming, well change their names if you fancy
	const inputDOM = document.querySelector("#w-slider");
	const wLevelDOM = document.querySelector("#w-level");
	const nameDOM = document.querySelector("#name");
	const descriptionDOM = document.querySelector("#description-widget");
	const regionDOM = document.querySelector("#region-widget");
	wLevelDOM.innerText = "w-level = 0";
	inputDOM.removeAttribute("style");

	// slider event listener also changes the text of the UI
	inputDOM.addEventListener('input', function() {
		w = this.value;
		wLevelDOM.innerText = `w-level = ${w}`;
		
		// finds the corresponding entry and retextures the planet accordingly
		for (let index = PLANETS.length - 1; index >= 0; --index) {
			let entry = PLANETS[index];
			if (this.value >= entry.w) {
				updatePlane(entry, index);
				updateWidgets(entry);
				break;
			}
		}
	});
	
	// helper function that returns true if x is between start and end regardless of x's sign
	function between(x, start, end) {
		return ((x-start)*(x-end) <= 0);
	}
	
	// function to update the DOM elements with the right values
	function updateWidgets(entry) {
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
			if (between(w, start, end)) {
				regionDOM.innerText = `Region: ${name}`;
				break;
			}
		}
	}
	
	// function that allows us to change the planet's textures in real time
	function updatePlane(entry, index) {
		let { outside, displacement, inside } = resources[index];
		outerMesh.material.map = outside;
		outerMesh.material.displacementMap = null;
		
		// displacement map, that well changes the vertices actually
		if (displacement) outerMesh.material.displacementMap = displacement
		
		// this is used to make sure that the material is updated
		outerMesh.material.needsUpdate = true;
		
		innerMesh.visible = false; // by default innerMesh shouldn't be visible
		if (inside) {
			innerMesh.material.map = inside;
			innerMesh.visible = true;
			innerMesh.material.needsUpdate = true;
			innerMesh.scale.setScalar(computeSize(w) * 0.99);
		}

		rotateInside = entry.rotateInside;

		// obviously changes the size of the planet's outerMesh mesh
		outerMesh.scale.setScalar(computeSize(w) * 1.01);
	}
	
	// this computes the size of the planet's according to the current w-value
	function computeSize(w) {
		let scale = (w + 1) / 180;
		scale = (-Math.pow(scale, 2)/7 + 15);
		return Math.max(scale, 0.1);
	}
	
	// well we need this to make sure stuff is right
	updatePlane(0, originIndex);
	updateWidgets(0, PLANETS[originIndex]);
}
