 let scene, camera, render, controls, spider;
        const material = new THREE.MeshPhongMaterial({
            color: 0x666666,    // red (can also use a CSS color string here)
            flatShading: true,
        });
        function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff);
            camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,10,2000);
            const light = new THREE.PointLight( 0xffffff, 1, 100 );
            light.position.set( 50, 50, 50 );
            scene.add( light );
            renderer = new THREE.WebGLRenderer({antialias:true});
            renderer.setSize(window.innerWidth,window.innerHeight);
            document.body.appendChild(renderer.domElement);
            addModel();
            addPlane();
            camera.position.set( 0, 20, 100 );
            controls = new THREE.OrbitControls( camera, renderer.domElement );
		    controls.autoRotate = true;
            controls.autoRotateSpeed = 0.03;
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.rotateSpeed = 0.1;
            controls.minDistance = 1;
            controls.maxDistance = 200;
            controls.maxPolarAngle = Math.PI/2 - .04;
            controls.target.set(0, 5, 0);
            controls.enableZoom = true;
            var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
            hemiLight.position.set( 50, 50, 0 );   
            scene.add( hemiLight );

            var dirLight = new THREE.DirectionalLight( 0xffffff, 0.54 );
            dirLight.position.set( -8, 12, 8 );
            dirLight.castShadow = true;
            dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024); 
            scene.add( dirLight );
            
            }   
            init();
            animate();
     
            function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
            controls.update();
            } 
            function addModel(){
                let loader = new THREE.GLTFLoader();
                loader.load('./3d_Models/GizoSpider_brelok.glb', function(gltf){
                spider = gltf.scene;
                spider.traverse((child) => {
                                        if (child.isMesh) child.material = material;
                                    });
                                    spider.scale.set(0.2, 0.2, 0.2);
                                    scene.add(spider);
                                    renderer.render(scene,camera);
                                }); 
                                
            }
            function addPlane(){
                const geometry = new THREE.PlaneGeometry( 100, 100 );
                const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
                const plane = new THREE.Mesh( geometry, material );
                rotateObject(plane,90,0,0);
               
                scene.add( plane );
            }

            function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
                object.rotateX(THREE.Math.degToRad(degreeX));
                object.rotateY(THREE.Math.degToRad(degreeY));
                object.rotateZ(THREE.Math.degToRad(degreeZ));
             }