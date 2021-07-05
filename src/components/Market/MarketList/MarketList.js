import React, { useState }  from 'react';
import './MarketList.scss';
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
  Button,
  Spinner
} from 'reactstrap';
import { 
  Pagination,
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';

const MarketList = (props) => {
  
  const [data] = useState(props.trees);
  const datamap = data.map((element)=>{
    return(
      <Col key={element.id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img"  src={"/api/images/"+element.picture} alt={element.name}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.name}</CardTitle>
            {/*<CardText className="category">{element.category}</CardText>*/}
            <CardText className="price">{element.price.mad} DH / {element.price.usd} USD</CardText>
            <CardText>
              <a href={'./Market/'.concat(element._id)} className="blue">view more</a>
            </CardText>
            <Button className="btn">Donate</Button>
          </CardBody>
        </Card>
      </Col>
    );
  })
  return(
    <div className="MarketList" data-testid="MarketList">
      <Row>
        {props.treesLoading?<div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="light" /></div> : datamap}
      </Row>
      <Row className="pagination">
          <Pagination size="sm" aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </Row>
    </div>
  );
};

export default MarketList;
