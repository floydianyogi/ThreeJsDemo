// let scene, camera, render;

// function init() {
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x7bd3f7);

//   camera = new THREE.PerspectiveCamera(
//     40,
//     window.innerWidth / window.innerHeight,
//     1,
//     5000
//   );
  // camera.rotation.y = (45 / 180) * Math.PI;
  // camera.position.x = 0;
  // camera.position.y = 150;
  // camera.position.z = 200;

  // hlight = new THREE.AmbientLight(0x404040, 11);
  // scene.add(hlight);

//   directionalLight = new THREE.DirectionalLight(0xffffff, 100)
//   directionalLight.position.set(0,1,0)
//   directionalLight.castShadow = true
//   scene.add(directionalLight)

//   light = new THREE.PointLight(0xc4c4c4, 0);
//   light.position.set(0, 300, 500);
//   scene.add(light);

//   light2 = new THREE.PointLight(0xc4c4c4, 0);
//   light.position.set(500, 100, 0);
//   scene.add(light2);

//   light3 = new THREE.PointLight(0xc4c4c4, 0);
//   light.position.set(0, 100, -500);
//   scene.add(light3);

//   light4 = new THREE.PointLight(0xc4c4c4, 0);
//   light.position.set(-5000, 300, 0);
//   scene.add(light4);

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);

//   controls = new THREE.OrbitControls(camera, renderer.domElement);
//   document.body.appendChild(renderer.domElement);
//   controls.maxDistance = 4000;

  // const textureloader = new THREE.TextureLoader();
  // const bgTexture = textureloader.load('tekken1.jpg');
  // scene.background = bgTexture;


  // let loader = new THREE.GLTFLoader();
  // loader.load("badgirl.glb", function (gltf) {
  //   myObj = gltf.scene.children[0];
  //   myObj.scale.set(0.5, 0.5, 0.5);
  //   scene.add(gltf.scene);
  //   animate();
  // });
// }

// function animate() {
  // myObj.rotation.y = Date.now()*.00035;
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize,false);
// init();
// animate();

