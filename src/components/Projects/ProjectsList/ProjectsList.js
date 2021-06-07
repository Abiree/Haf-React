import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProjectsList.scss';
import {Data} from './Data';
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
  CardSubtitle, 
  Button
} from 'reactstrap';
import { 
  Pagination,
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';

const ProjectsList = () => {
  const [data,setData] = useState(Data);
  const datamap = data.map((element)=>{
    return(
      <Col id={element.id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={element.img} alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.title}</CardTitle>
            <CardText className="parag">{element.paragraph}</CardText>
            <a className="blue">view more</a>
            <div className="donators">
              <p className="donator">{element.donators} <br/> Donors</p>
              <p className="don">{element.dons} <br/> Donations</p>
            </div>
            
            <Button className="btn">Donate</Button>
          </CardBody>
        </Card>
      </Col>
    );
  })
  return(
    <div className="ProjectsList" data-testid="ProjectsList">
      <Row>
        {datamap}
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

ProjectsList.propTypes = {};

ProjectsList.defaultProps = {};

export default ProjectsList;
