import React from 'react';
import HydeParkLogo2 from './HydeParkLogo2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 
 const HistoryTabThree = () => {
     return (
         
<VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#aa3148', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
      iconStyle={{ background: '#aa3148', color: '#fff' }}
      icon={HydeParkLogo2}
    >
     <p>In January 2011 Pastor Elgin Clement was assigned to pastor the Hyde Park church. He was also serving a the pastor of the Cambridge Seventh-day Adventist Church in Malden, Massachusetts, at the time.</p>       
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#aa3148', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
      iconStyle={{ background: '#aa3148', color: '#fff' }}
      icon={HydeParkLogo2}
    >
     <p>On January 26, 2019, James Yansen, Jr., was installed as the fifth pastor to serve the Hyde Park church congregation.</p>       
    </VerticalTimelineElement>
    
  </VerticalTimeline>
     )
    
 }
export default HistoryTabThree;