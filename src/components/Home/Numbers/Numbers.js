import React, { useState } from 'react';
import './Numbers.scss';
import {Card , CardBody, CardText , CardTitle, Col ,Row} from 'reactstrap';

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
    <div className="content">
      <Row className="row">
        {card}
      </Row>
    </div>
  </div>
  )
};


export default Numbers;
