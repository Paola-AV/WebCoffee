import gDerecha from "../images/gDerecha.png";
import { useSpring,useScroll, animated } from '@react-spring/web'

export function Granos4() {


    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { tension:40, friction:8},
        transform: 'translate3d(300px,-200px,0px)',
        opacity:1,
        width:'6%'
    })
    return (
        <animated.div
            style={mover}
        >
            <img src={gDerecha} class="blur-[3px]" alt="Granos de café"/>
        </animated.div>
    )
}