import useMacbookStore from "../store/index.js";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";

import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import {useMediaQuery} from "react-responsive";
import {OrbitControls} from "@react-three/drei";

const ProductViewer = () => {
    const { color, scale, setColor, setScale }= useMacbookStore();

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className="info">MacbookPro {scale} in {color}</p>

                <div className="flex-center gap-5 mt-5">


                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
                        >
                            <p>14"</p>
                        </div>
                        <div
                        onClick={() => setScale(0.08)}
                        className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />

                <MacbookModel14 scale={0.06} position={[0,0,0]}/>

                <OrbitControls enableZoom={false}/>

            </Canvas>
        </section>
    )
}
export default ProductViewer;