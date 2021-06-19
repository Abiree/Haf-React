/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react';
import './ProjectsList.scss';
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

const ProjectsList = (props) => {
  const [pagination] = useState(props.pagination === undefined || props.pagination<1 ? 1 : props.pagination);
  const [data] = useState(props.projects);
 
  const handleKeyDown = (Event) => {
    if(Event.key === 'Enter'){
      if(data.length!=0){
      props.fetchPagination(Event.target.value)
      };
    }
    if(Event.target.id === 'next'){
      if(data.length!=0){
      props.fetchPagination(pagination+1);}
    }
    if(Event.target.id === 'previous'){
      props.fetchPagination(pagination-1);
    }
  }

  

  const datamap = data.length===0 ? <div style={{"color":"white","text-align":"center","font-size":"20px","width":"100%"}}>No More Items</div>:data.map((element)=>{
    return(
      <Col id={element.id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={"/api/images/"+element.image} alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.title}</CardTitle>
            <CardText className="parag">{element.description}</CardText>
            <a href={'./project/'.concat(element._id)} className="blue">view more</a>
            <div className="donators">
              <p className="donator">{element.donations.length} <br/> Donors</p>
              <p className="don">{element.totalDons} <br/> Donations</p>
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
        {props.projectsLoading?<div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="light" /></div> : datamap}
      </Row>
      <Row className="pagination">
          <Pagination size="sm" aria-label="Page navigation example">
          <PaginationItem > 
            <PaginationLink  previous id="previous" onClick={handleKeyDown}/>
          </PaginationItem>
          <PaginationItem>
            <input style={{"width":"30px","text-align":"center"}} type="number" onKeyDown={handleKeyDown} placeholder={pagination}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next id="next" onClick={handleKeyDown}/>
          </PaginationItem>
        </Pagination>
      </Row>
    </div>
  );
};


export default ProjectsList;
