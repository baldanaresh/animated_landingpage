import Mainsec from "./Mainsec";
import Navbar from "./Navbar";
import Social from "./Social";

export default function BackgroundVideo(){
    return<>
    <div className="relative w-svw h-svh object-cover -z-10 m-0 font-">
        <video autoPlay loop muted
          src="y2mate.com - Sukunas Fire Arrow  4K 60FPS_1080pFHR.mp4" className="w-full h-full absolute rounded"></video>
    </div>
    <Navbar/>
    <Mainsec/>
    <Social/>
    </>
}