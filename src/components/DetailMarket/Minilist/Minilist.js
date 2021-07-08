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

import Treepop from '../../Market/Treepop/Treepop';
const Minilist = (props) =>{
  console.log(props)
  const [idProject, setIdProject] = useState("");
   /*----------------------------tree---------------------------------*/
   const [treemodal, settreeModal] = useState(false);
   const [treeunmountOnClose] = useState(false);
   const toggleTreeModal = (id) => {
     settreeModal(!treemodal);
     setIdProject(id);
     console.log(id)
   }; 
  //console.log(props)
  const [data] = useState(props.trees.slice(0,3));
  //console.log([data]);
  //console.log("minilist")
 
  const datamap = data.map((element)=>{
    return(
      <Col key={element._id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={"/api/images/"+element.picture} alt={element.name}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.name}</CardTitle>
            {/*<CardText className="category">{element.category}</CardText>*/}
            <CardText className="price">{element.price.mad}DH/{element.price.usd} $</CardText>
            <CardText>
              <a href={element._id} className="blue">view more</a>
            </CardText>
            
            <Button className="btn" onClick={()=>toggleTreeModal(element._id)}>Add to cart</Button>
            <Treepop addToCart={props.addToCart} modal={treemodal} toggle={toggleTreeModal}  user={props.user}  unmountOnClose={treeunmountOnClose} Tree={props.Tree} treeId={idProject} />
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