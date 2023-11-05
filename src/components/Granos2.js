import gIzquierda from "../images/gIzquierda.png";
import { useSpring, animated } from 'react-spring';

export function Granos2(){
    const mover = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,-400px,0px)',
            width:'1%'
        },
        config: { duration: 1000 },
        transform: 'translate3d(0px,-80px,0px)',
        opacity:1,
        width:'6%'
    });
    return(
        <animated.div
            style={mover}
        >
            <img src={gIzquierda}  class="blur-[1px]" alt="Granos de café"/>
        </animated.div>
    )
}