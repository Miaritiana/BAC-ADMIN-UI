import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Candidates from './Components/CandidatesList';
import Login from './Components/Login';

const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Candidates />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
