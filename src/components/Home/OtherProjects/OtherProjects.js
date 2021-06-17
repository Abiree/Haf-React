/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import './OtherProjects.scss';
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
const OtherProjects = (props) => {
  const [data] = useState(props.projects);
  const threeCards = data.map((element)=>{
    return(
      <Col key={element.id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={element.img} alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.title}</CardTitle>
            <CardText className="parag">{element.paragraph}</CardText>
            <a className="blue">view more</a>
            <div className="donators">
              <p className="donator">{element.donators}  <br/> Donors</p>
              <p className="don">{element.dons} <br/> Donations</p>
            </div>
            <Button className="btn">Donate</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
  if(props.projectsLoading){
    return (
      <div className="OtherProjects" data-testid="OtherProjects">
        <div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="primary" /></div>
      </div>
    );
  }
  return(
    <div className="OtherProjects" data-testid="OtherProjects">
      <h2>Other Projects</h2>
      <Row className="row">
        {threeCards}
      </Row>
      <div className="projects">
        <a href="/project">Discover Other Projects &gt;&gt;</a>
      </div>
    </div>
  );
};

export default OtherProjects;
