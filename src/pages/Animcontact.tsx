import { useEffect, useRef } from "react";
import * as THREE from "three";

const Animcontact = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ---------------------------------------------------------------------
    // ⭐ CREATE FLOATING DOTS
    // ---------------------------------------------------------------------
    const dotsCount = 120;
    const dotGeometry = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotsCount * 3);

    for (let i = 0; i < dotsCount * 3; i++) {
      dotPositions[i] = (Math.random() - 0.5) * 20;
    }

    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dotPositions, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: "#60a5fa",
    });

    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    // ---------------------------------------------------------------------
    // 🔗 CONNECTION LINES
    // ---------------------------------------------------------------------
    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#3b82f6",
      transparent: true,
      opacity: 0.4,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(dotsCount * dotsCount * 3 * 2);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ---------------------------------------------------------------------
    // 🌀 ANIMATION LOOP
    // ---------------------------------------------------------------------
    const animate = () => {
      requestAnimationFrame(animate);

      // Soft floating motion
      const positions = dotGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < dotsCount; i++) {
        positions[i * 3 + 1] += Math.sin(i + performance.now() * 0.0008) * 0.003;
      }
      dotGeometry.attributes.position.needsUpdate = true;

      // Update connection lines
      let ptr = 0;
      for (let i = 0; i < dotsCount; i++) {
        for (let j = i + 1; j < dotsCount; j++) {
          const ax = positions[i * 3];
          const ay = positions[i * 3 + 1];
          const az = positions[i * 3 + 2];

          const bx = positions[j * 3];
          const by = positions[j * 3 + 1];
          const bz = positions[j * 3 + 2];

          const dist = Math.sqrt(
            (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2
          );

          if (dist < 4) {
            linePositions[ptr++] = ax;
            linePositions[ptr++] = ay;
            linePositions[ptr++] = az;

            linePositions[ptr++] = bx;
            linePositions[ptr++] = by;
            linePositions[ptr++] = bz;
          }
        }
      }

      lineGeometry.setDrawRange(0, ptr / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mount) return;
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

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};

export default Animcontact;
