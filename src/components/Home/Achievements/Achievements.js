import React, { useState,useEffect } from 'react';
import './Achievements.scss';
import {Row, Col} from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
  const [data] = useState([
    {
      "id" : 0,
      "img" : "./assets/badge-consumer-HAf.png"
    },
    {
      "id" : 1,
      "img" : "./assets/badge.png"
    },
    {
      "id":2,
      "img": "./assets/effectivee.png"
    },
    {
      "id" : 3,
      "img" : "./assets/projectoftheMonth.png"
    },
    {
      "id" : 4,
      "img" : "./assets/siteVisit.png"
    },
    {
      "id":5,
      "img": "./assets/topRanked.png"
    }
  ]);
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  const cards = data.map((element)=>{
    return(
      <Col key={element.id} className="column" xs="12" sm="6" md="4" lg="2">
        <img width="130px"src={element.img} alt={element.id}/>
      </Col>
    );
  })
  return(
    <div className="Achievements" data-testid="Achievements">
      <h2>Achievements</h2>
      <div data-aos="fade-up" className="content">
        <Row>
          {cards}
        </Row>
      </div>
    </div>
  );
};

export default Achievements;
