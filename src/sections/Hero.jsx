import { OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackround";
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth : 853});

    return (<section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space " id="home"> 
        <HeroText />
        <ParallaxBackground />
        <figure className="absolute inset-0 " style={{width : "100vw", height: "100vh"}}> 
            <Canvas camera = {{ position: [0, 1, 3]}}>
                <Suspense fallback= { <Loader />}>
                    <Astronaut scale = {isMobile && 0.23} position= {isMobile && [0, -1.5, 0]}/>
                </Suspense>
                <OrbitControls 
                    enableZoom = {false} 
                    enablePan = {false} 
                    enableRotate = {true} 
                />
                
            </Canvas>
        </figure>
    </section>);
};

export default Hero;