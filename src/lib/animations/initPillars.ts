import type { BoxGeometry, MeshNormalMaterial, Scene } from "three";
import * as THREE from "three";

const addPillar = (
  material: MeshNormalMaterial,
	scene: Scene,
  x: number,
  y: number,
  z: number
) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
};

const initPillars = () => {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  const scene: Scene = new THREE.Scene();

  const geometry: BoxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material: MeshNormalMaterial = new THREE.MeshNormalMaterial();

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const animation = (time: number) => {
    renderer.render(scene, camera);
  };
  renderer.setAnimationLoop(animation);
  const container = document.querySelector("#container");
  if (!container) return;
  container.appendChild(renderer.domElement);
};

export default initPillars;
