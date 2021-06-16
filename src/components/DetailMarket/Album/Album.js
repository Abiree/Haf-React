/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react';
import './Album.scss';
import {Container,Row,Col} from 'reactstrap';

const Album = (props) =>{ 
  const [album] = useState(props.trees[0].Album);
  /*const [album] = useState([
    {
      "id":0,
      "src":".././assets/trees.jpg"
    },
    {
      "id":1,
      "src":".././assets/trees.jpg"
    },
    {
      "id":2,
      "src":".././assets/trees.jpg"
    },
    {
      "id":3,
      "src":".././assets/trees.jpg" 
    }
  ]);
  */

  const images = album.map((element)=>{
    return(
      <Col style={{"margin-top":"25px"}} key={element.key} xs="12" sm="6" md="4" lg="3">
        <a target="_blank" href={".././".concat(element.img)}>
        <img src={".././".concat(element.img)} className="img-fluid" width="300px" alt="other image"/>
        </a>
        
      </Col>
    )
  });

  return(
  <Container style={{"margin-bottom":"35px"}} className="Album" data-testid="Album">
    <Row style={{"margin-left":"0px"}}>
      {images}
    </Row>
  </Container>
  
);
}


export default Album;
