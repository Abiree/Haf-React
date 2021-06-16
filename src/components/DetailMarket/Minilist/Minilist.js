import React,{useState} from 'react';
import './Minilist.scss';
import { 
  Col,
  Row 
} from 'react-bootstrap';
import{
  Card,
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button
} from 'reactstrap';


const Minilist = (props) =>{ 
  const [data] = useState(props.treelist);
  //console.log([data]);
  //console.log(props);
  const datamap = data.map((element)=>{
    return(
      <Col key={element.id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src="../.././assets/trees.jpg" alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.title}</CardTitle>
            <CardText className="category">{element.category}</CardText>
            <CardText className="price">{element.price}</CardText>
            <CardText>
              <a href={element.id} className="blue">view more</a>
            </CardText>
            
            <Button className="btn">Donate</Button>
          </CardBody>
        </Card>
      </Col>
    );
  })
  return(
  <div className="Minilist" data-testid="Minilist">
     <Row>
        {datamap}
      </Row>
  </div>
);
}


export default Minilist;
