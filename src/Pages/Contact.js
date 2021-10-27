import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

const Contact =(props) => {
    console.log(props.userNOW)
    return (
        <Parallax pages={1}>
            <ParallaxLayer offset={0} factor={2} speed={1} style={{backgroundImage: 'url(./contactbackground.png)'}}>
                <form>
                    <input type='text'/>
                </form>
            </ParallaxLayer>
        </Parallax>
    )
}
export default Contact;