import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Achievements.scss';
import {Row, Col} from 'reactstrap';
const Achievements = () => {
  const [data,setdata] = useState([
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
  ])
  const cards = data.map((element)=>{
    return(
      <Col className="column" xs="12" sm="6" md="4" lg="2">
        <img width="130px"src={element.img} alt={element.id}/>
      </Col>
    );
  })
  return(
    <div className="Achievements" data-testid="Achievements">
      <h2>Achievements</h2>
      <div className="content">
        <Row>
          {cards}
        </Row>
      </div>
    </div>
  );
};

Achievements.propTypes = {};

Achievements.defaultProps = {};

export default Achievements;
