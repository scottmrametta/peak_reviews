import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import TrackListReview from './pages/TrackListReview';
import AlbumReview from './pages/AddAlbumReview';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/artist" element={ <Artists /> } />
        <Route path="/album" element={ <Albums /> } />
        <Route path="/tracklist" element={ <TrackListReview /> } />
        <Route path="/albumreviews" element={ <AlbumReview /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
    </Router>
     
  );
}


export default App;
