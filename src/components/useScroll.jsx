import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const useScroll = (thresh = .4) => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: thresh});
    console.log(controls)
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}
