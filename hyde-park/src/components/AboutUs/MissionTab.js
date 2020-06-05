import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './MissionTab.css'
import JoinUsBanner from '../JoinUsBanner/JoinUsBanner';
import LocationBanner from '../LocationBanner/LocationBanner';
import PastorPhoto from './PastorPhoto.jpg';
import YouthImage from '../../Banners/youthpic.jpg';
import Overlay from 'react-image-overlay'
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import { FaPrayingHands, FaYoutube, FaHandHoldingHeart } from 'react-icons/fa';
import HistoryTabOne from './HistoryTabOne';
import HistoryTabTwo from './HistoryTabTwo';
import HistoryTabThree from './HistoryTabThree';


const MissionTab = () => {
  return (
    <div className="MissionTab">
      <div class="mission-container" >
        <div class="row">
          <div class="column-33">
            <img src={YouthImage} alt="App" height="auto" width="auto" />
          </div>
          <div class="column-66 mission-words-container">
            <h1 class="xlarge-font MissionTitle">Mission</h1>
            <p className="MStatement">The Hyde Park Seventh-day Adventist Church (formerly Mattapan Seventh-day Adventist Church) is a community of faith drawn together by our love for God. We reach out to share the Good News of His love and salvation with all mankind This we do with compassion and with a firm commitment to our Lord and Savior, Jesus Christ, being empowered by the Holy Spirit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MissionTab;