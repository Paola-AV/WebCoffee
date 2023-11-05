import gFrente from "../images/gFrente.png";
import { useSpring,useScroll, animated } from '@react-spring/web'

export function Granos3() {

    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { duration: 1000 },
        transform: 'translate3d(-380px,80px,0px)',
        opacity:1,
        width:'5%'
    })
    return (
        <animated.div
            style={mover}
        >
            <img src={gFrente} class="blur-[1px]" alt="Granos de café"/>
        </animated.div>
    )
}