import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

export function HeroGlobe() {
    return (
        <div className="w-full h-[800px] relative cursor-move">
            {/* Moved camera closer to 3.8 to make globe big again, relying on wide container for clipping safety */}
            <Canvas camera={{ position: [0, 0, 3.8], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <GlobeParticles />
                <Satellites />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}

function GlobeParticles(props: any) {
    const ref = useRef<THREE.Points>(null);

    // Increased radius to 1.8 for maximum impact
    const sphere = useMemo(() => {
        return generateSpherePoints(5000, 1.8);
    }, []);

    // useFrame((state, delta) => {
    // Rotation handled by OrbitControls autoRotate for smoother interaction
    // });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#1e293b" // Dark Slate 800 for visibility on light bg
                    size={0.015} // Slightly larger
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function Satellites() {
    const groupRef = useRef<THREE.Group>(null);

    // Create 3 distinct satellites with different orbits
    // Using explicit geometries as "particles"

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Rotate the entire satellite group slowly against the globe
            groupRef.current.rotation.y -= delta * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Scaled satellite orbits up */}
            <OrbitingSatellite radius={2.3} speed={1} color="#3b82f6" offset={0} tilt={[0.2, 0, 0.2]} />
            {/* Satellite 2: Medium orbit, medium */}
            <OrbitingSatellite radius={2.7} speed={0.7} color="#f97316" offset={2} tilt={[-0.2, 0, -0.2]} />
            {/* Satellite 3: High orbit, slow */}
            <OrbitingSatellite radius={3.1} speed={0.5} color="#22c55e" offset={4} tilt={[0.4, 0, 0]} />
        </group>
    );
}

function OrbitingSatellite({ radius, speed, color, offset, tilt }: any) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = clock.getElapsedTime() * speed + offset;
            ref.current.position.x = Math.cos(t) * radius;
            ref.current.position.z = Math.sin(t) * radius;
        }
    });

    return (
        <group rotation={tilt}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </group>
    );
}

function generateSpherePoints(count: number, radius: number) {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Spherical coordinates
        const theta = Math.random() * Math.PI * 2; // Azimuthal angle
        const phi = Math.acos(2 * Math.random() - 1); // Polar angle (uniform distribution)

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
    }
    return points;
}
