import React from 'react';
import MainNav from '../MainNav/MainNav';
import './AboutUs.css'
import HistoryTabOne from './HistoryTabOne/HistoryTabOne';
import HistoryTabTwo from './HistoryTabTwo/HistoryTabTwo';
import HistoryTabThree from './HistoryTabThree/HistoryTabThree';
import MissionTab from './MissionTab/MissionTab';
import OurPastor from './OurPastor/OurPastor';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <MissionTab />
      <OurPastor />
      <div className="History">
        <h1>From a Mission to a Church</h1>
        <h2>January 1987 - January 1996</h2>
      </div>
      <HistoryTabOne />
      <div className="History">
        <h1>Mattapan Church</h1>
        <h2>February 1996 - December 2010</h2>
      </div>
      <HistoryTabTwo />
      <div className="History">
        <h1>The Hyde Park SDA Church</h1>
        <h2>January 2011 - Present</h2>
      </div>
      <HistoryTabThree />
    </div>
  )
}
export default AboutUs;