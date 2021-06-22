import React, { useState,useEffect } from 'react';
import './Numbers.scss';
import {Card , CardBody, CardText , CardTitle, Col ,Row} from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Numbers = (props) => {
  const [data] = useState([
    {
      "id":0,
      "number" : "20",
      "title" : "Project"
    },
    {
      "id":1,
      "number" : "50",
      "title" : "Donors"
    },
    {
      "id":2,
      "number" : "40",
      "title" : "Dons"
    },
    {
      "id":3,
      "number" : "10",
      "title" : "Entreprises"
    }
  ]);
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  const card = data.map((element)=>{
      return(
        <Col key={element.id}>
          <Card className="card">
            <CardBody>
              <CardTitle className="cardTitle">
                {element.number}
              </CardTitle>
              <CardText className="cardText">
                {element.title}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
  })
  
  return(
  <div className="cards" data-testid="Numbers">
    <h2>Numbers</h2>
    <div data-aos="fade-up" className="content">
      <Row className="row">
        {card}
      </Row>
    </div>
  </div>
  )
};


export default Numbers;
