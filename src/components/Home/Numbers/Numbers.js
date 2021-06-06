import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Numbers.scss';
import {Card , CardBody, CardText , CardTitle, Col ,Row} from 'reactstrap';

const Numbers = (props) => {
  const [data, setData] = useState([
    {
      "number" : "20",
      "title" : "Project"
    },
    {
      "number" : "50",
      "title" : "Donors"
    },
    {
      "number" : "40",
      "title" : "Dons"
    },
    {
      "number" : "10",
      "title" : "Entreprises"
    }
  ]);

  const card = data.map((element)=>{
      return(
        <Col>
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
    <Row>
      {card}
    </Row>
  </div>
  )
};

Numbers.propTypes = {};

Numbers.defaultProps = {};

export default Numbers;
