// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// const Nebula = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     // Scene
//     const scene = new THREE.Scene();
//     scene.fog = new THREE.Fog("#030617", 10, 40);

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       mount.clientWidth / mount.clientHeight,
//       0.1,
//       500
//     );
//     camera.position.set(0, 2, 10);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(mount.clientWidth, mount.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mount.appendChild(renderer.domElement);

//     // ----------------------------------
//     // 🌌 GALAXY NEBULA BACKGROUND
//     // ----------------------------------
//     const textureLoader = new THREE.TextureLoader();
//     const nebulaTexture = textureLoader.load("/textures/nebula.jpg");

//     const bgGeometry = new THREE.SphereGeometry(50, 64, 64);
//     const bgMaterial = new THREE.MeshBasicMaterial({
//       map: nebulaTexture,
//       side: THREE.BackSide,
//     });

//     const galaxy = new THREE.Mesh(bgGeometry, bgMaterial);
//     scene.add(galaxy);

//     // ----------------------------------
//     // ⭐ FLOATING STAR FIELD
//     // ----------------------------------
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 2500;
//     const starPositions = new Float32Array(starCount * 3);

//     for (let i = 0; i < starCount * 3; i++) {
//       starPositions[i] = (Math.random() - 0.5) * 200;
//     }

//     starGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(starPositions, 3)
//     );

//     const starMaterial = new THREE.PointsMaterial({
//       size: 0.7,
//       transparent: true,
//       opacity: 0.9,
//       color: "#ffffff",
//     });

//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // ----------------------------------
//     // ⚡ SHOOTING STAR
//     // ----------------------------------
//     const shootingStarGeometry = new THREE.SphereGeometry(0.05, 16, 16);
//     const shootingStarMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });
//     const shootingStar = new THREE.Mesh(
//       shootingStarGeometry,
//       shootingStarMaterial
//     );
//     scene.add(shootingStar);

//     let shootingStarProgress = -40;

//     // ----------------------------------
//     // 💠 FUTURISTIC GRID FLOOR
//     // ----------------------------------
//     const gridHelper = new THREE.GridHelper(60, 60, "#00aaff", "#003355");
//     gridHelper.position.y = -5;
//     scene.add(gridHelper);

//     // ----------------------------------
//     // 🌬 LIGHTING
//     // ----------------------------------
//     const ambientLight = new THREE.AmbientLight("#ffffff", 0.4);
//     const pointLight = new THREE.PointLight("#88ccff", 1, 100);
//     pointLight.position.set(10, 10, 10);

//     scene.add(ambientLight);
//     scene.add(pointLight);

//     // ----------------------------------
//     // 🎥 ANIMATION LOOP
//     // ----------------------------------
//     const clock = new THREE.Clock();

//     const animate = () => {
//       requestAnimationFrame(animate);

//       const elapsed = clock.getElapsedTime();

//       // Rotate galaxy background slowly
//       galaxy.rotation.y += 0.0004;

//       // Drift stars
//       stars.rotation.y += 0.0005;

//       // Shooting star movement
//       shootingStarProgress += 0.4;
//       if (shootingStarProgress > 40) shootingStarProgress = -40;

//       shootingStar.position.set(
//         shootingStarProgress,
//         Math.sin(elapsed) * 5,
//         -20 + (shootingStarProgress * 0.3)
//       );

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Resize Handler
//     const handleResize = () => {
//       if (!mount) return;
//       renderer.setSize(mount.clientWidth, mount.clientHeight);
//       camera.aspect = mount.clientWidth / mount.clientHeight;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mount.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div ref={mountRef} className="absolute inset-0 z-0 w-full h-full" />
//   );
// };

// export default Nebula;

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Nebula = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.09,
      1000
    );
    camera.position.set(2, 2, 2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // -----------------------------------------------------------
    // 🟢 CREATE MULTIPLE JUMPING SPHERES
    // -----------------------------------------------------------
    const balls: THREE.Mesh[] = [];
    const velocities: number[] = [];

    const ballCount = 40;

    for (let i = 0; i < ballCount; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.4 + 0.2, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 80%, 60%)`),
        roughness: 0.3,
        metalness: 0.6,
      });

      const ball = new THREE.Mesh(geometry, material);
      ball.position.x = (Math.random() - 0.5) * 10;
      ball.position.y = Math.random() * 3 + 1;
      ball.position.z = (Math.random() - 0.5) * 6;

      scene.add(ball);
      balls.push(ball);

      velocities.push(0); // initial velocity per ball
    }

    // -----------------------------------------------------------
    // 🌫 FLOOR (INVISIBLE, for bouncing physics)
    // -----------------------------------------------------------
    const floorY = -2;

    // -----------------------------------------------------------
    // 💡 LIGHTING
    // -----------------------------------------------------------
    const ambient = new THREE.AmbientLight("#ffffff", 0.4);
    const topLight = new THREE.PointLight("#88ccff", 2, 30);
    topLight.position.set(0, 10, 10);

    scene.add(ambient, topLight);

    // -----------------------------------------------------------
    // 🎥 ANIMATION LOOP
    // -----------------------------------------------------------
    const animate = () => {
      requestAnimationFrame(animate);

      // Bouncing physics
      balls.forEach((ball, i) => {
        velocities[i] -= 0.01; // Gravity
        ball.position.y += velocities[i];

        if (ball.position.y <= floorY + 0.2) {
          ball.position.y = floorY + 0.2;
          velocities[i] *= -0.85; // bounce energy loss
        }

        // Sway movement
        ball.position.x += Math.sin(i + performance.now() * 0.001) * 0.005;
      });

      // Slight camera motion
      camera.position.x = Math.sin(performance.now() * 0.0003) * 1.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />
  );
};

export default Nebula;
