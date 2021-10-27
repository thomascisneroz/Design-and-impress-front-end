import React, {useEffect, useState} from "react";
import HobbyCard from "./HobbyCard";
import '../Components/HobbyCard.css';
// import {useSprings} from 'react-spring'
// import {useGesture} from 'react-use-gesture'


const Hobby = () => {

    const [hobbies, setHobbies] = useState([])
    // console.log(hobbies)

    useEffect(() => {
        fetch('http://localhost:3000/hobbies')
        .then(resp =>resp.json())
        .then(hobbyData => {
            setHobbies(hobbyData)
        })
    }, [])

    // const to = i => ({ 
    //     x: 0, 
    //     y: i * -4, 
    //     scale: 1, 
    //     rot: -10 + Math.random() * 20, 
    //     delay: i * 100 
    // })

    // const from = i => ({
    //     rot: 0, 
    //     scale: 1.5,
    //     y: -1000 
    // })

    // const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r/10}deg) rotateZ(${r}deg scale(${s}))`;

    // const [gone] = useState(() => new Set())

    // const [props, set] = useSprings(hobbies.length, i=> ({
    //     ...to(i),
    //     from: from(i)
    // }));

    // const bind = useGesture(
    //     ({
    //         args: [index],
    //         down,
    //         delta: [xDelta],
    //         distance,
    //         direction: [xDir],
    //         velocity
    //     })=> {
    //         const trigger = velocity > 0.2

    //         const dir = xDir < 0 ? -1: 1 
    //         if (!down && trigger) gone.add(index)
    //         set(i => {
    //             if(index !== i) return 
    //             const isGone = gone.has(index)
    //             const x = isGone ? (200 + window.innerWidth) *dir : down ? xDelta : 0;
    //             const rot = xDelta /100 + (isGone ? dir* 10 *velocity : 0)
    //             const scale = down ? 1.1: 1;
    //             return {
    //                 x,
    //                 rot,
    //                 scale,
    //                 delay: undefined,
    //                 config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500}
    //             }
    //         });
    //         if(!down && gone.size === hobbies.length)
    //         setTimeout(() => gone.clear() || set(i=> to(i)), 600)
    //     })
    // console.log(props)
    // console.log(hobbies)
    // props.map(({ x, y, rot, scale}, i)=>
    return  ( 
        <div className="hobbies-container" >
            {hobbies.map(eachHobby => {
                return (
                    <HobbyCard 
                    // i={i} 
                    // x={x} 
                    // y={y} 
                    // rot={rot} 
                    // scale={scale} 
                    // trans={trans} 
                    // bind={bind} 
                    key={eachHobby.id} 
                    eachHobby={eachHobby}  
                    label={eachHobby.name} 
                    />
                )
            })}
        </div>
    )  
}
export default Hobby;