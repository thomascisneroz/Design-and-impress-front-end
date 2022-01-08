import React from 'react';
import {useState} from 'react'

const Login = (props) => {
    //for login purposes
    console.log(props.userNOW)
    const [currentUser, setCurrentUser] = useState('')
    const [userActive, setActiveUser] = useState(false)
    const [logginUser, setLogginUser] = useState ('')
    const [loggedIPW, setLoggedIPW] = useState('')

    const tpyingLPW = (e) => {
        setLoggedIPW(e.target.value)
    }


    //for signup
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const typingUsername =(synthEvent)=>{
        setUsername(synthEvent.target.value)
    }
    const typingEmail=(synthEvent)=>{
        setEmail(synthEvent.target.value)
    }
    const typingPassword=(synthEvent)=>{
        setPassword(synthEvent.target.value)
    }
    // console.log(currentUser)

    


    const tpyingForLogin = (synthEvent) => {
        setLogginUser(synthEvent.target.value)
    }

    const handleUserLogin = (synthEvent) => {
        synthEvent.preventDefault()
    

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({name: logginUser})
        })
        .then(resp => resp.json())
        .then(loggedIN => {console.log(loggedIN)
        setCurrentUser(loggedIN)
        if(!loggedIN.errors){
            setActiveUser(true)
            props.setter(loggedIN)
        }
        });
    }

    const handleLogout = (synthEvent) => {
        synthEvent.preventDefault()

        fetch('http://localhost:3000/logout', {
            method: 'DELETE'
        })
        .then(resp => resp.json)
        .then(loggedOut => {console.log(loggedOut)
        setCurrentUser({})
        setActiveUser(false)
        setLogginUser('')
        setLoggedIPW('')
        })
    }

    const isThereAUser = () => {
        return userActive ? 
        (<>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
        </>
        )
        : (<></>)
    }

    const handleUserSignUp =(synthEvent) => {
        synthEvent.preventDefault()
        const userObj = {
            name: username,
            email: email,
            password: password
        }
    

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(userObj),
    })
    .then(resp => resp.json)
    .then(console.log)
    }




    return(
        <div className='Login-out-form' style={{backgroundImage: 'url(./contactbackground.png)', backgroundSize: 'cover', height: '100vh', color: 'white'}}>
            <h2>Login!</h2>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleUserLogin}>
                <label>Username: </label>
                <input className='login-name'type='text' value={logginUser} onChange={tpyingForLogin}/>
                <label>Password: </label>
                <input className='password' type='password' value={loggedIPW} onChange={tpyingLPW}/>
                <input type='submit' value='Login' />
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Sign Up</h2>
            <form onSubmit={handleUserSignUp}>
                <labe>Username</labe>
                <input className='created-username' type='text' value={username} onChange={typingUsername} />
                <label>Email</label>
                <input className='created-email' type='text' value={email} onChange ={typingEmail}/>
                <label>Password</label>
                <input className='created-password' type='password' value={password} onChange={typingPassword} />
                
                <input type='submit' value='Sign-up' />
            </form>

            {isThereAUser()}

        </div>
    )
}
export default Login;
