import React from 'react';
import MainNav from '../MainNav/MainNav';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './OurPastor.css'
import JoinUsBanner from '../JoinUsBanner/JoinUsBanner';
import LocationBanner from '../LocationBanner/LocationBanner';
import PastorPhoto from './PastorPhoto.jpg';
import HydeParkLogo2 from './HydeParkLogo2.png';
import Overlay from 'react-image-overlay'
import Card from 'react-bootstrap/Card';

const OurPastor = () => {
  return (
    <div className="PastorTab">
      <div className="pastor-container" >
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font PastorTitle">Our Pastor</h1>
            {/* <img src={PastorPhoto} alt="App" height="auto" width="auto" />   */}
            <p className="MStatement">
              James W. S. Yansen, Jr., is a committed Christian for whom the Cross of Jesus Christ holds preeminence. Christ’s life, ministry, death, resurrection, and soon return are his raison d’être. His highest hopes, deepest passions, loftiest aspirations are all wrapped up in His relationship with his Lord and Savior, Jesus Christ.
            James has the awesome privilege of sharing in kingdom service with his wife and their two children. This family circle is James' first and most important sphere of ministry. Every other sphere of service is secondary. This priority of family is one of the cornerstones of his ministry.
            It has truly been a humbling, sacred joy for James to serve as a co-laborer, together with Christ in the ministry of reconciliation for the past 23 years. His favorite Bible passage is 1 Corinthians 9:16, “For though I preach the gospel, I have nothing to glory of: for necessity is laid upon me;
            yea, woe is unto me, if I preach not the gospel!” His favorite quote is, “There is no limit to the usefulness of the one who, putting self aside, makes room for the working of the Holy Spirit upon his heart and lives a life wholly consecrated to God. . . .  So mightily can God work when men give themselves up to the control of His Spirit” (Testimonies, vol. 8, pp. 18, -20).
            Together, James and his family are committed to living and manifesting the character of Jesus Christ in every facet of their lives. The most enduring witness to one’s life and legacy is character; not human accolades, nor stellar accomplishments, or material acquisitions. A Christ-like character is the true measure of a person’s life and legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
// const AboutUs = () => {
//     return (
//         <div className="AboutUs">
//             <MainNav />
//             <div className="SDABanner">

//             </div>

// <div class="container">
//   <div class="row">
//     <div class="column-66">
//       <h1 class="OurPastor">Our Pastor</h1>
//       <div className="AboutUsContent">
//       <p>
// James W. S. Yansen, Jr., is a committed Christian for whom the Cross of Jesus Christ holds preeminence. Christ’s life, ministry, death, resurrection, and soon return are his raison d’être. His highest hopes, deepest passions, loftiest aspirations are all wrapped up in His relationship with his Lord and Savior, Jesus Christ.</p>
// <p>James has the awesome privilege of sharing in kingdom service with his wife and their two children. This family circle is James' first and most important sphere of ministry. Every other sphere of service is secondary. This priority of family is one of the cornerstones of his ministry.</p>
// <p>It has truly been a humbling, sacred joy for James to serve as a co-laborer, together with Christ in the ministry of reconciliation for the past 23 years. His favorite Bible passage is 1 Corinthians 9:16, “For though I preach the gospel, I have nothing to glory of: for necessity is laid upon me; yea, woe is unto me, if I preach not the gospel!” His favorite quote is, “There is no limit to the usefulness of the one who, putting self aside, makes room for the working of the Holy Spirit upon his heart and lives a life wholly consecrated to God. . . .  So mightily can God work when men give themselves up to the control of His Spirit” (Testimonies, vol. 8, pp. 18, -20).</p>
// <p>Together, James and his family are committed to living and manifesting the character of Jesus Christ in every facet of their lives. The most enduring witness to one’s life and legacy is character; not human accolades, nor stellar accomplishments, or material acquisitions. A Christ-like character is the true measure of a person’s life and legacy.</p>
// </div>
//     </div>
//     <div class="column-33">
//         <img src={PastorPhoto} width="335" height="471"/>
//     </div>
//   </div>
// </div>
//         </div>
//     )
// }
export default OurPastor;