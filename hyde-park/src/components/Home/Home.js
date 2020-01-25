import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './Home.css'
import JoinUs from '../JoinUs/JoinUs';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <MainNav />
            <HomeVideoBackground />
            <HomeButton title="Minister"/>
            <HomeButton title="Live" position="middle"/>
            <HomeButton title="Give"/>
            <Footer />
        </div>
    )
}
export default Home;