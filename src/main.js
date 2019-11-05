import * as THREE from 'https://unpkg.com/three@0.110.0/build/three.module.js?module'

const scene = new THREE.Scene()

scene.background = new THREE.Color(0xff4a3f)

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

camera.rotateZ(-0.785)
camera.position.set(0, 0, 20)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const createPlane = ({ w = 1, h = 1, x = 0, y = 0, z = 0, c = 0x000000 }) => {
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ color: c })
  )
  plane.position.set(x, y, z)
  return plane
}

const createPlanes = (props = []) => {
  const planes = props.map(createPlane)
  const group = new THREE.Group()
  planes.forEach((plane) => group.add(plane))
  return group
}

const pop = createPlanes([
  { w: 1, h: 6.95, y: 13.9, x: 2.6, c: 0xa6a6a6 },
  { w: 1, h: 6.95, y: 5.15, x: 0.8, c: 0xa6a6a6 },
  { w: 1, h: 1.55, y: 0, x: 0, c: 0xa6a6a6 },
  { w: 1, h: 9.6, y: -7.65, x: 2, c: 0xa6a6a6 }
])

pop.position.set(-3.1, 0.4, 0)

scene.add(pop)

renderer.render(scene, camera)
