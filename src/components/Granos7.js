import gFrente from "../images/gFrente.png";
import { useSpring,useScroll, animated } from '@react-spring/web'

export function Granos7() {

    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { tension:40, friction:8},
        transform: 'translate3d(-80px,80px,0px)',
        opacity:1,
        width:'5%'
    })
    return (
        <animated.div
            style={mover}
        >
            <img src={gFrente} class="blur-[3px]" alt="Granos de café"/>
        </animated.div>
    )
}