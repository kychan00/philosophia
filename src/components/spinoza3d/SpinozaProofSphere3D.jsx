import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

function kindColor(kind) {
  if (kind === 'Definición' || kind === 'definition') return '#49687d'
  if (kind === 'Axioma' || kind === 'axiom') return '#a37b24'
  return '#704840'
}

export default function SpinozaProofSphere3D({
  node,
  config,
  selected,
  related,
  showLabels,
  onlyCardinals,
  focusActive = false,
  displayPosition = config.position,
  onSelect,
}) {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef(null)
  const initialized = useRef(false)

  const targetPosition = useMemo(
    () => new THREE.Vector3(...displayPosition),
    [displayPosition],
  )

  useFrame((_, delta) => {
    if (!groupRef.current) return

    if (!initialized.current) {
      groupRef.current.position.copy(targetPosition)
      initialized.current = true
      return
    }

    const alpha = 1 - Math.exp(-6.5 * delta)
    groupRef.current.position.lerp(targetPosition, alpha)
  })

  const hiddenByCardinalFilter =
    onlyCardinals && !config.cardinal && !selected && !related

  if (hiddenByCardinalFilter) return null

  const color = config.cardinal ? '#8b5e43' : kindColor(node.data.kind)
  const active = selected || hovered
  const opacity = selected
    ? 1
    : related
      ? 0.96
      : focusActive
        ? 0.16
        : config.cardinal
          ? 0.88
          : 0.58

  const showNodeLabel =
    selected || hovered || (showLabels && (!focusActive || related || config.cardinal))

  const size = config.size

  return (
    <group ref={groupRef}>
      <mesh
        scale={active ? 1.09 : focusActive && !related ? 0.72 : 1}
        renderOrder={12}
        onClick={(event) => {
          event.stopPropagation()
          onSelect(node.id)
        }}
        onPointerOver={(event) => {
          event.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
      >
        <sphereGeometry args={[size, 36, 24]} />
        <meshStandardMaterial
          color={color}
          roughness={0.70}
          metalness={0.035}
          transparent
          opacity={opacity}
        />
      </mesh>

      {config.cardinal && (
        <mesh scale={1.22} renderOrder={11}>
          <sphereGeometry args={[size, 20, 14]} />
          <meshBasicMaterial
            color="#a37b24"
            wireframe
            transparent
            opacity={selected ? 0.42 : focusActive && !related ? 0.06 : 0.18}
          />
        </mesh>
      )}

      {selected && (
        <>
          <mesh scale={1.36} renderOrder={10}>
            <sphereGeometry args={[size, 18, 12]} />
            <meshBasicMaterial
              color="#5f8a63"
              wireframe
              transparent
              opacity={0.32}
            />
          </mesh>

          {focusActive && (
            <mesh scale={1.64} rotation={[Math.PI / 2, 0.15, 0]} renderOrder={9}>
              <torusGeometry args={[size, 0.018, 10, 80]} />
              <meshBasicMaterial
                color="#a37b24"
                transparent
                opacity={0.55}
                depthTest={false}
              />
            </mesh>
          )}
        </>
      )}

      {showNodeLabel && (
        <Billboard position={[0, size + 0.62, 0]} follow renderOrder={2500}>
          <mesh position={[0, 0, -0.03]} renderOrder={2500}>
            <planeGeometry args={[2.35, 0.84]} />
            <meshBasicMaterial
              color="#f5ecde"
              transparent
              opacity={selected ? 0.98 : 0.94}
              depthTest={false}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>

          <Text
            position={[0, 0.18, 0]}
            fontSize={0.13}
            color={config.cardinal ? '#8b5e43' : '#a37b24'}
            anchorX="center"
            anchorY="middle"
            maxWidth={2.05}
            renderOrder={2501}
            material-depthTest={false}
            material-depthWrite={false}
            material-toneMapped={false}
          >
            {node.data.code}
          </Text>

          <Text
            position={[0, -0.07, 0]}
            fontSize={selected ? 0.18 : 0.16}
            color="#2f2a24"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.0}
            textAlign="center"
            lineHeight={0.95}
            renderOrder={2501}
            material-depthTest={false}
            material-depthWrite={false}
            material-toneMapped={false}
          >
            {node.data.title}
          </Text>
        </Billboard>
      )}
    </group>
  )
}
