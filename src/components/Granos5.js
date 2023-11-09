import gMedio from "../images/gMedio.png";
import { useSpring,useScroll, animated } from '@react-spring/web'

export function Granos5() {

    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { tension:40, friction:8},
        transform: 'translate3d(-100px,-220px,0px)',
        opacity:1,
        width:'5%'
    })
    return (
        <animated.div
            style={mover}
        >
            <img src={gMedio} class="blur-[3px]" alt="Granos de café"/>
        </animated.div>
    )
}