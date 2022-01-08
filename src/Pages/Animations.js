import React, {useState, useEffect} from 'react';
import {useSpring, useTransition, animated, config} from 'react-spring';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import './Animations.css';


const Animations = (props) => {
    console.log(props.userNOW)
    // image paths
const bg = '/Space-bg.png';
const sat = '/Satellite2.png';
const astro = '/Astronaut.png';
const earth = '/Earth.png';
const cloud = '/Cloud-hd.png';
const moon = '/moon.png'
// hobbies fetch
const [items, setItems] = useState([]);
const [woobly, setWoobly] = useState(false);
const transition = useTransition( items , {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10},
    enter: item => async (next) => {
        await next({y: item.y, opacity: 1, delay: item.delay })
        await next({x: 0, width: 100, height: 100})
    },
    leave: { x:100, y:800, opactity: 0},
    // reverse: items,
    // onRest: () => setItems(!items),
})



const styling = useSpring({
    loop: true,
    to: [
        {opacity: 1, color: 'white' },
        {opacity: 0, color: 'transparent' },
],
from: {opactity: 0, color: 'transparent' },
display: 'flex', 
config: {duration: 1000},
justifyContent: 'center',
alignItems: 'center',
position: 'relative',
})

const satStyles = useSpring({
    loop: {reverse: true},
    delay: 3000,
    from: {rotateZ: 0, rotateX: 0, },
    to: {rotateZ: 360, rotateX: 360}, 
    config: {duration: 80000},
    reset: true,
})

const moonStyle = useSpring({
    loop: {reverse: true},
    from: {y: 0 },
    to: {y: 180},
    config: {duration: 5000},
})

const styles = useSpring({
    loop:  true ,
    delay: 2000,
    from: { x: -85 },
    to: { x: 1500 },
    config: {duration: 3000},
  })

  const ship = useSpring({
    loop:  true ,
    delay: 4000,
    from: { x: -85 },
    to: { x: 1600 },
    config: {duration: 3000},
  })

  const flipping = useSpring({
      loop: {reverse: true},
      from: {rotateX: 0},
      to: {rotateX: 360},
  })

  
  

    return(
        <div className='container' >
            <div classNam='flip-container' style={{ backgroundColor: 'black'}} >
                <button onClick={(se)=> { console.log(se.target.value)
                    setWoobly(!woobly)
                    if (woobly === true) {
                    setItems(v => v.legnth ? [] : [
                        {y: -100, delay: 200},
                        {y: -50, delay: 400},
                        {y: 0, delay: 600},
                    ])}
                    else (setItems([]))
                    }} >{woobly ? 'mount' : 'un-mount'}</button>
                    <div className='mount-container'>
                        {transition((style, item) =>
                        item ? <animated.div style={style} className='item'/> : '' )}
                    </div>
            </div>
        <Parallax className='top-page' pages={2} >
            
            <ParallaxLayer className='first-layer'
            offset={0}
            speed={1}
            factor={3}
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', backgroundSize: 'cover'}} 
            >
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1} factor={3} style={{backgroundColor: 'grey', backgroundSize: 'cover', backgroundImage: `url(${bg})`}} >
                <animated.div className='fade' style={styling}>Fading text transitions</animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={1} >
                
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', position: 'absolute', y: -10}}>
                <p className='scroll-text'>Animation Examples</p>
            </ParallaxLayer>
            <ParallaxLayer offset={0.4} speed={2.5} >
            <animated.div style={satStyles}>
            <img className='sat'src={sat} alt='satallite' style={{marginBottom: '100%'}} />
            </animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={2.5}>
            <animated.div style={{width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...flipping , x: 500, y: 1000
                        }}>      
                        <img style={{height: 90, borderRadius: 16}} src='https://i.pinimg.com/originals/f0/e0/e9/f0e0e994c6700e2cf0540fb25c8b4edc.png' />      
            </animated.div>
            <animated.div style={{width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...flipping , x: 900, y: 600
                        }}>      
                        <img style={{height: 80, borderRadius: 16}} src='https://i.pinimg.com/originals/f0/e0/e9/f0e0e994c6700e2cf0540fb25c8b4edc.png' />      
            </animated.div>
            <animated.div style={{width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...flipping , x: 1000, y: 1200
                        }}>      
                        <img style={{height: 150, borderRadius: 16}} src='https://i.pinimg.com/originals/f0/e0/e9/f0e0e994c6700e2cf0540fb25c8b4edc.png' />      
            </animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.7} speed={1.5}>
                <img className='cloud' src={cloud} alt='cloud' style={{marginRight: '80%' , maxWidth: '40%'}} />
                <img className='cloud' src={cloud} alt='cloud' style={{marginLeft: '15%' , maxWidth: '20%'}} />
                    <animated.div  style={{
                        width: 80,
                        height: 80,
                        borderRadius: 16,
                        rotateZ: 90,
                        ...styles,
                    }}><img style={{height: 100, borderRadius: 16}} src='/galaga.png' alt='sample-pic' />
                    <animated.div style={{color: 'white', rotateZ: 270, fontSize: '30px', y: 10}}>Hello </animated.div></animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
                <img className='cloud' src={cloud} alt='cloud' style={{marginRight: '80%',  Height: 'auto', maxWidth: '40%'}} />
                <animated.div style={{
                    width: 80,
                    height: 80,
                    borderRadius: 16,
                    rotateZ: 90,
                    ...ship,
                    y: -1000,
                }}><img style={{height: 100, borderRadius: 16}} src='/galaga.png' alt='sample-pic' />
                <animated.div style={{fontSize: '30px', color: 'white', rotateZ: 270, y: 45}}>Marquee</animated.div></animated.div>
                <img className='cloud' src={cloud} alt='cloud' style={{marginLeft: '80%', Height: 'auto', maxWidth: '20%'}} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={-3} style={{color: 'white', }}>
                <div className='grid-example-container' >
                    <div className='grid-example-wrapper' style={{backgroundColor: 'gray'}}>
                        <div className='grid-example'>
                            Like the Animations on this page your presentation can become so much more.
                        </div>
                        <div className='grid-example'>
                            These side by side grids will travel down with your scroll.
                        </div>
                        <div className='grid-example' >
                            If we disappear you can bring us back by scrolling back up.
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={.7} style={{}}>
                <animated.div style={moonStyle}>
                <img className='moon' src={moon} alt='moon' style={{marginLeft: '60%', Height: 'auto', maxWidth: '20%'}} />
                </animated.div>
            </ParallaxLayer>
                <ParallaxLayer offset={1} speed={6} style={{color: 'white', maxHeight: '50%', backgroundColor: 'gray'}}> 
                     <div className='text' >
                         With CSS the universe is whatever you want it to be
                    </div>
                        <br></br>
                            <p>Creating, Captivating, and Evolving</p>
                                <br></br>
                                    <p>
                                        Like that you control the presentation and the little stories you make on your apps.
                                        You can make it all stop and go grey or you can go back up and show movement and wonder. 
                                    </p>
                                    <br></br>
                                    <p>
                                        There is so much you can do with CSS and stlying that I can talk about forever and show you. 
                                    </p>
                                    <br></br>
                                    <p>Without it you can see everything is dull and boring just something presented.</p>
                                    <p>With CSS you can give life and personality to your apps and web pages.</p>
                                    <p>I can't wait to hear from, work, stlye and creating animations with you.</p>
                </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.50} style={{maxHeight: 'auto', magrinbottom: 'auto', marginLeft: '10%'}} >
                <img className='astro' src={astro} alt='astro'/>
                {/* <img className='moon' src={moon} alt='moon' style={{marginLeft: '60%', Height: 'auto', maxWidth: '20%'}} /> */}
            </ParallaxLayer>
            
            <ParallaxLayer offset={1.2} speed={1}>
                <img className='earth' src={earth} alt='earth' style={{marginLeft: '0%'}} />
                {/* <img className='cloud' src={cloud} alt='cloud' style={{ width: '50%', marginRight: '30%', position: 'block'}} /> */}
                <img className='cloud' src={cloud} alt='cloud' style={{width: '30%', display: 'block', marginLeft: '80%', maringBottom: '80%'}}/>
                <img className='cloud' src={cloud} alt='cloud' style={{width: '30%', marginRight: '80%', position: 'block'}} />
            </ParallaxLayer>
            </Parallax>
        </div>
    )
}
export default Animations;
