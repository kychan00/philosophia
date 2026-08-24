import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

export default function SpinozaSphere3D({
  node,
  selected,
  related,
  showLabels,
  focusActive = false,
  displayPosition = node.position,
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

  const active = selected || hovered
  const opacity = selected
    ? 1
    : related
      ? 0.96
      : focusActive
        ? 0.20
        : 0.72

  const showNodeLabel =
    selected || hovered || (showLabels && (!focusActive || related))

  const labelLift = node.labelLift ?? (selected ? node.size + 0.92 : node.size + 0.74)
  const panelWidth = selected ? 2.5 : 2.18
  const panelHeight = selected ? 0.92 : 0.78

  return (
    <group ref={groupRef}>
      <mesh
        scale={active ? 1.08 : focusActive && !related ? 0.78 : 1}
        renderOrder={10}
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
        <sphereGeometry args={[node.size, 40, 28]} />
        <meshStandardMaterial
          color={node.color}
          roughness={0.74}
          metalness={0.035}
          transparent
          opacity={opacity}
        />
      </mesh>

      {selected && (
        <>
          <mesh scale={1.19} renderOrder={11}>
            <sphereGeometry args={[node.size, 24, 18]} />
            <meshBasicMaterial
              color={node.color}
              wireframe
              transparent
              opacity={0.31}
            />
          </mesh>

          {focusActive && (
            <mesh scale={1.48} rotation={[Math.PI / 2, 0.2, 0]} renderOrder={9}>
              <torusGeometry args={[node.size, 0.018, 10, 80]} />
              <meshBasicMaterial
                color="#a37b24"
                transparent
                opacity={0.48}
                depthTest={false}
              />
            </mesh>
          )}
        </>
      )}

      {showNodeLabel && (
        <Billboard position={[0, labelLift, 0]} follow renderOrder={2000}>
          <mesh position={[0, 0, -0.03]} renderOrder={2000}>
            <planeGeometry args={[panelWidth, panelHeight]} />
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
            color="#a37b24"
            anchorX="center"
            anchorY="middle"
            maxWidth={panelWidth - 0.2}
            renderOrder={2001}
            material-depthTest={false}
            material-depthWrite={false}
            material-toneMapped={false}
          >
            {node.code}
          </Text>

          <Text
            position={[0, -0.07, 0]}
            fontSize={selected ? 0.18 : 0.165}
            color="#2f2a24"
            anchorX="center"
            anchorY="middle"
            maxWidth={panelWidth - 0.18}
            textAlign="center"
            lineHeight={0.95}
            renderOrder={2001}
            material-depthTest={false}
            material-depthWrite={false}
            material-toneMapped={false}
          >
            {node.label}
          </Text>
        </Billboard>
      )}
    </group>
  )
}
