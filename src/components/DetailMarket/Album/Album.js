import React,{useState} from 'react';
import PropTypes from 'prop-types';
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

Album.propTypes = {};

Album.defaultProps = {};

export default Album;
