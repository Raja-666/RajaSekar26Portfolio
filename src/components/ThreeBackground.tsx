

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0f172a");

    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // 🔮 Glowing Energy Sphere (smooth + beautiful)
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: "#6366f1",
      metalness: 0.7,
      roughness: 0.2,
      emissive: "#4f46e5",
      emissiveIntensity: 0.09,
    });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.z = -2;
    scene.add(sphere);

    // ✨ Floating Particles (premium effect)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;

    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.07,
      transparent: true,
      opacity: 0.7,
      color: "#a5b4fc",
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const pointLight = new THREE.PointLight("#818cf8", 3);
    pointLight.position.set(4, 4, 4);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight("#ffffff", 0.4);
    scene.add(ambientLight);

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      // sphere subtle breathing motion
      sphere.scale.set(
        1 + Math.sin(t) * 0.03,
        1 + Math.sin(t) * 0.03,
        1 + Math.sin(t) * 0.03
      );

      // glowing rotation
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.002;

      // particle slow drift
      particles.rotation.y = t * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // On resize
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default ThreeBackground;
