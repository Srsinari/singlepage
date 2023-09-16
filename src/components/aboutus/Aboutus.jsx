import React from 'react';
import "./Aboutus.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import LastMessage from "./lastmessage.jsx";
import Marquee from './Marquee';

export default function Aboutus() {
  return (
    
    <div>
    <Marquee/>
    
    <div className='aboutus' id='aboutus'>
    
    <VerticalTimeline lineColor='blue'>
     
      <VerticalTimelineElement   //1
    className="vertical-timeline-element--work"
    contentStyle={{ background:"white", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">First Month</h3>
    <h4 className="vertical-timeline-element-subtitle">May 2023</h4>
    <p>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
    </p>
       
  </VerticalTimelineElement>


  <VerticalTimelineElement //2
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 23)', color: '#fff' }}    
  >
    <h3 className="vertical-timeline-element-title">First Month</h3>
    <h4 className="vertical-timeline-element-subtitle">May 2023</h4>
    <p>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement   //3
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(334, 150, 24)', color: '#fff' }}>
  <h3 className="vertical-timeline-element-title">First Month</h3>
    <h4 className="vertical-timeline-element-subtitle">May 2023</h4>
    <p>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
    </p>
    
  </VerticalTimelineElement>


  <VerticalTimelineElement   //4
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

    <h3 className="vertical-timeline-element-title">First Month</h3>
    <h4 className="vertical-timeline-element-subtitle">May 2023</h4>
    <p>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement //5
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>

<h3 className="vertical-timeline-element-title">First Month</h3>
    <h4 className="vertical-timeline-element-subtitle">May 2023</h4>
    <p>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
    </p>
   
  </VerticalTimelineElement>
  
 </VerticalTimeline>
 
 </div>
 <LastMessage />
 </div>

  )
}

