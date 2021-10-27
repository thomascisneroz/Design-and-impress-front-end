import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Animations from './Pages/Animations';
import Login from './Pages/Login';
import Comments from './Pages/Comments';
import Contact from './Pages/Contact'
// import ParallaxFront from './Components/Deck'
// import Deck from './Components/Deck';


function App() {
 const [userNOW, setUserNOW] = useState('')
console.log(userNOW)




  return (
    <div className="App">
      <Router>
        <Navbar />
         <Switch>
          <Route path='/animations'><Animations userNOW={userNOW} setter={setUserNOW} /></Route>
          <Route exact path='/login' >< Login userNOW={userNOW} setter={setUserNOW} /> </Route>
          <Route path='/comments'  ><Comments userNOW={userNOW} setter={setUserNOW} /> </Route>
          <Route path='/contact' ><Contact userNOW={userNOW} setter={setUserNOW} /></Route>
          <Route path='/' ><Home userNOW={userNOW} setter={setUserNOW} /></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
