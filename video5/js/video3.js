$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(0xdddddd);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;
	renderer.shadowMapSoft = true;

	var axis = new THREE.AxisHelper(10);
	scene.add(axis);

	var grid = new THREE.GridHelper(50,5);
	var color = new THREE.Color("rgb(255,0,0)");
	grid.setColors(color, 0x000000);

	scene.add(grid);

	var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
	var cubeMaterial = new THREE.MeshLambertMaterial({
		color:0xff3300
	});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


	var planeGeometry = new THREE.PlaneGeometry(30,30,30);
	var planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);

	plane.rotation.x = -.5*Math.PI;
	plane.receiveShadow = true;

	scene.add(plane);

	cube.position.x = 2.5;
	cube.position.y = 2.5;
	cube.position.z = 2.5;
	cube.castShadow = true;

	scene.add(cube);

	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.castShadow = true;
	spotLight.position.set(15, 30, 50);

	scene.add(spotLight);

	camera.position.x = 40;
	camera.position.y = 40;
	camera.position.z = 40;

	camera.lookAt(scene.position);

	$("#webGL-container").append(renderer.domElement);
	renderer.render(scene,camera);
});