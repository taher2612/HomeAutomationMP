import { useState } from 'react';
import './App.css';
import Bedroom from './Bedroom';
import BedroomAd from './BedroomAd';
import Bill from './Bill';
import Home from './Home';
import Login1 from './Login1';
import Login2 from './Login2';
import MySpaces from './MySpaces';
import SignSignup from './SignSignup';
import Signup from './Signup';
import Spaces from './Spaces';
import Splash from './Splash';

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login1" element={<Login1 />} />
            <Route path="/login2" element={<Login2 />} />
            <Route path="/sign-signup" element={<SignSignup />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/bill" element={<Bill/>} />
            <Route path="/spaces" element={<Spaces/>} />
            <Route path="/bedroom" element={<Bedroom/>} />
            <Route path="/myspace" element={<MySpaces/>} />
            {/* <Route path="/bedroom2" element={<BedroomAd />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
