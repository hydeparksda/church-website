import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './Home.css'
import JoinUs from '../JoinUs/JoinUs';
import MiddleButton from '../HomeButton/MiddleButton/MiddleButton';


const Home = () => {
    return (
        <div>
            <MainNav />
            <HomeVideoBackground />
            <JoinUs />
            {/* <HomeButton>
            </HomeButton>
            <HomeButton>
                <MiddleButton/>
            </HomeButton>
            <HomeButton>
            </HomeButton> */}
        </div>
    )
}

export default Home;