/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react';
import './Album.scss';
import {Container,Row,Col} from 'reactstrap';

const Album = (props) =>{ 
  const id=useState(props.idtree);
  const data = useState(props.trees.filter((x) => x._id === id[0]));
  
  
 

  return(
  <Container style={{"margin-bottom":"35px"}} className="Album" data-testid="Album">
    <Row style={{"margin-left":"0px"}}>
    <Col style={{"margin-top":"25px"}} key={data[0][0]._id} xs="12" sm="6" md="4" lg="3">
        <a target="_blank" href={"/api/images/"+data[0][0].picture}>
        <img src={"/api/images/"+data[0][0].picture} className="img-fluid" width="300px" alt="other image"/>
        </a>
      </Col>
    </Row>
  </Container>
  
);
}


export default Album;