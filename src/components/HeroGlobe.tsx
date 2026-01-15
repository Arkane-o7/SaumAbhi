import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


export function HeroGlobe() {
    return (
        <div className="w-full h-full relative cursor-move">
            <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
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

    // Generate points on a sphere
    const sphere = useMemo(() => {
        return generateSpherePoints(5000, 1.2);
    }, []);

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
    return (
        <group>
            <Satellite radius={1.4} speed={0.8} color="#3b82f6" size={0.08} rotation={[0.4, 0.2, 0]} />
            <Satellite radius={1.6} speed={0.6} color="#f97316" size={0.06} rotation={[2, 1, 0]} reverse />
            <Satellite radius={1.5} speed={0.7} color="#10b981" size={0.07} rotation={[1, 3, 0]} />
        </group>
    );
}

function Satellite({ radius, speed, color, size, rotation, reverse = false }: {
    radius: number;
    speed: number;
    color: string;
    size: number;
    rotation: [number, number, number];
    reverse?: boolean;
}) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * speed * (reverse ? -1 : 1);
        }
    });

    return (
        <group rotation={rotation}>
            <group ref={groupRef}>
                <mesh position={[radius, 0, 0]}>
                    <sphereGeometry args={[size, 16, 16]} />
                    <meshBasicMaterial color={color} transparent opacity={0.8} />
                </mesh>
            </group>
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

