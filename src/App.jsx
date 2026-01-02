import NavBar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
import ModelSwitcher from "./components/three/ModelSwitcher.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ProductViewer />


        </>
    );
};

export default App;


