import React from 'react';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
// import Deck from '../Components/Deck'
import {Link} from 'react-router-dom'
import './Home.css';
// import {useSpring, animated} from 'react-spring'
import Hobby from '../Components/Hobby';
import { animated, useSpring } from 'react-spring';
import * as FaIcons from 'react-icons/fa'
import * as DiIcons from 'react-icons/di'



const Home =(props) => {
    // console.log(props.userNOW)
    // const styles = useSpring({
    //     from: {x: -300 , opactiy: 0},
    //     to: 
    //         {x: 300, y: 80, opacity: 1}, 
    // delay: 200,
    // config: {duration: 3000},
    //     loop: {reverse: true},
    //     reset: true,
    //     // reverse: true,
    // })

    const flip = useSpring({
        loop: true,
        from: {rotateZ: 0},
        to: {rotateZ: 360},
        config: {duration: 5000},
    })

    // const iconSpin = useSpring({
    //     loop: true,
    //     from: { opactiy: 0},
    //     to: { opacity: 0},
    // })
    return(
    <div className='container'>
        <Parallax className='outer-para' pages={2.7}>
            <ParallaxLayer className='first-layer' offset={0} factor={3} speed={1} style={{backgroundColor: 'black', backgroundImage: 'url(https://i.pinimg.com/564x/cb/b1/bb/cbb1bb00c1c8b65feecfb3b314fb4839.jpg)', backgroundSize: 'cover'}} > 
            </ParallaxLayer>
            <ParallaxLayer className='second-layer' offset={.5}>
                <animated.div className='name-container' style={{backgroundColor: '', marginTop: '-20%', maxWidth: '40%'}} >
                    <div className='name' style={{backgroundColor: 'white'}} >
                    Thomas Cisneroz
                    <p className='my-info' >
                        CSS Guru
                    </p>
                    <br></br>
                    <img src='https://i.pinimg.com/474x/62/03/94/62039414ea79aa6c7309243dbf12584e.jpg' alt='sample-pic' />
                    </div>
                </animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2} style={{backgroundColor: '#d7b4f3', position: 'relative', justifyContent: 'center', borderRadius: '40px', maxWidth: '30%', marginLeft: '10%', top: '-45%', height: 'auto'}}>
                {/* <br></br> */}
                <div className='about-me'>
                    <p className='me' style={{padding: '10px'}}>
                        <p>
                            Design, captivate, and impress.
                        {/* </p> */}
                        {/* <br></br> */}
                        <p>
                            These are the things I strive for when creating a changing up a app/website.
                        </p>
                        {/* <br></br> */}
                        {/* <p> */}
                            I have always had a love for art and design passion for coding combining the two passions into a blossoming career. 
                        {/* </p> */}
                        {/* <br></br> */}
                        {/* <p> */}
                            Constantly learning and constantly improving.
                        {/* </p> */}
                        {/* <br></br> */}
                        {/* <p> */}
                            Great experiences with working with departments of all kinda and provide new looks at problem solving.
                        </p>
                    </p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2} style={{backgroundColor: '#d7b4f3', position: 'relative', justifyContent: 'center', borderRadius: '40px', maxWidth: '30%', marginLeft: '70%', top: '-25%', height: 'auto', fontSize: '30px', marginTop: '-10%',padding: '10px'}}>
                Here are some things that I enjoy below.
                <p>And check out my other pages for request and examples of what I have done.</p>
                {/* <p>More personal stuff below</p> */}
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={1} style={{background: 'transparent'}}>
                <div className='icon-container' style={{backgroundColor: 'transparent'}}>
                <animated.div className='square' style={{...flip , fontSize: '80px'}} >
                    <img src='/logo192.png' alt='react-logo' />
                </animated.div>
                <animated.div >
                <FaIcons.FaHtml5 className='html' />
                </animated.div>
                <animated.div>
                    <FaIcons.FaCss3Alt className='css' />
                </animated.div>
                <animated.div>
                    <DiIcons.DiRuby className='ruby' />
                </animated.div>
                <animated.div>
                    <FaIcons.FaGithub className='github'/>
                </animated.div>
                <animated.div>
                    <DiIcons.DiPhotoshop className='photoshop' />
                </animated.div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed={1} style={{backgroundColor: 'gray', backgroundSize: 'cover'}} factor={3}>
                {/* <Link to='/animations'> */}
                <FaIcons.FaInstagram className='instagram'/>
                {/* </Link> */}
                <FaIcons.FaLinkedin className='linkedin'/>
                <FaIcons.FaFacebookSquare className='facebook'/>
                <div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer className='second-layer' offset={1.5} speed={2} style={{}}>
                <Hobby />
                <ParallaxLayer offset={1.7} speed={2} style={{marginTop: '95%', backgroundImage: 'url(./contactbackground.png)', color: 'white'}}>
                    <div className='footer-links' style={{fontSize: '20px'}} >
                        <div className='footer-link-wrapper'>
                            <div className="footer-link-items">
                                <h2>About Me</h2>
                                {/* <Link to='/sign-up'>Your next trip awaits.</Link> */}
                                <Link to='/comments'>Request</Link>
                                <Link to='/animations'>Animations</Link>
                                {/* <Link to='/'>Investors</Link> */}
                                <Link to='/'>Terms of Service</Link>
                            </div>
                            <div className="footer-link-items">
                                <h2>Contact Me</h2>
                                <Link to='/'>Contact</Link>
                                {/* <Link to='/'>Support</Link> */}
                                <Link to='/'>Email</Link>
                                <Link to='/login'>Login/Signup</Link>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </ParallaxLayer>
            <ParallaxLayer className='second-layer' offset={1.1} speed={3} style={{fontSize: '120px', color: 'white'}}>
                <br></br>
                <div className='hobby-title'>Hobbies</div>
            </ParallaxLayer>
        </Parallax>    
    </div>
    )
}
export default Home;