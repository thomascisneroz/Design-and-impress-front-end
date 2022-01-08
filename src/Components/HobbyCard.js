import React from 'react';
import './HobbyCard.css';
import {Link} from 'react-router-dom'
import {animated} from 'react-spring'
import {useSpring} from 'react-spring'



const HobbyCard = (props) => {
    // console.log(props)
    const styles = useSpring({
        loop: {reverse: true},
        delay: 200,
        from: {x: 0},
        to: { x: 360}, 
        reset: true,
    })

    

    
    return (
        
        <animated.div style={{styles}}className='hobby-card' > 
            <Link className='hobby-card-link' to='/'>
            <figure className='card-wrapper' data-category={props.label}>
                <img className='hobby-example'src={props.eachHobby.image} alt='hobby-example'/>
            </figure>
            
                <div className='hobby-card-info' >
                    <h5 className='hobby-card-descript'> {props.eachHobby.description}</h5>
                </div>
            </Link>
        </animated.div>
    )
}
export default HobbyCard;
