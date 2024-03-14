// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import Login from './component/login';
import About from './component/About';
import Ticket from './component/Ticket';
import NavBar from './component/NavBar';
import UseEffectEx from './component/UseEffectEx';

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    // };

    // const handleLogout = () => {
    //     setUsername('');
    //     setPassword('');
    //     setIsLoggedIn(false);
    // };

    return (
        <div>
            <Router> {/* Wrap your Routes with the Router component */}
                <NavBar />
               
                
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About name='imtiyaj' objective="This props is passed by App.js"/>} />
                    <Route path="/ticket" element={<Ticket />} />
                    <Route path="/UseEffectEx" element={<UseEffectEx />} />
                </Routes>
            </Router>

            
        </div>
    );
}

export default App;
