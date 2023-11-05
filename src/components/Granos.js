import granos from "../images/granos.png";
import granos2 from "../images/granos2.png";
import gArriba from "../images/gArriba.png";
import { useSpring,useScroll, animated } from '@react-spring/web'

export function Granos() {

    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { duration: 1000 },
        transform: 'translate3d(200px,100px,0px)',
        opacity:1,
        width:'9%'
    })
    return (
        <animated.div
            style={mover}
        >
            <img src={gArriba} class="blur-[1px]" alt="Granos de café"/>
        </animated.div>
    )
}