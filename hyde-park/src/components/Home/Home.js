import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './Home.css'
import {
  Link
} from "react-router-dom";
import JoinUsBanner from '../JoinUsBanner/JoinUsBanner';
import LocationBanner from '../LocationBanner/LocationBanner';

import Footer from '../Footer/Footer';
import { FaPrayingHands, FaYoutube, FaHandHoldingHeart } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="home">
            <MainNav />
            <HomeVideoBackground />
            <JoinUsBanner/>
            <LocationBanner/>
            <HomeButton title="Minister" color="#d5a93b">
            <FaPrayingHands/>
            </HomeButton>
            <HomeButton title="Watch" position="middle" color="black">
            <FaYoutube/>
            </HomeButton>
            <HomeButton title="Give" color="#d5a93b">
                <FaHandHoldingHeart/>
            </HomeButton>
            <Footer />
        </div>
    )
}
export default Home;