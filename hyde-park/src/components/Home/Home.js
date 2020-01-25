import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './Home.css'
import JoinUs from '../JoinUs/JoinUs';
import Footer from '../Footer/Footer';
import { FaPrayingHands, FaYoutube, FaHandHoldingHeart } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="home">
            <MainNav />
            <HomeVideoBackground />
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