/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react';
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
import Aos from 'aos';
import 'aos/dist/aos.css';
import Donationpop from '../../Projects/Donationpop/Donationpop';
const OtherProjects = (props) => {
  const [idProject, setIdProject] = useState("");
  /*----------------------------donate---------------------------------*/
  const [donatemodal, setdonateModal] = useState(false);
  const [donateunmountOnClose] = useState(false);
  const toggleDonateModal = (id) => {
    setdonateModal(!donatemodal);
    setIdProject(id);
    console.log(id)
    
  };
  const [data] = useState(props.projects);
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

  const threeCards = data.map((element)=>{
    return(
      <Col key={element._id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={"/api/images/"+element.image} alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.title}</CardTitle>
            <CardText className="parag">{element.description}</CardText>
            <a className="blue" href={'./project/'.concat(element._id)}>view more</a>
            <div className="donators">
              <p className="donator">{element.donations.length}  <br/> Donation</p>
              <p className="don">{element.totalDons} $ <br/> Total Dons</p>
            </div>
            <Button className="btn" onClick={()=>toggleDonateModal(element._id)}>Donate</Button>
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
       <Donationpop modal={donatemodal} toggle={toggleDonateModal}  user={props.user}  unmountOnClose={donateunmountOnClose} Donate={props.Donate} idProject={idProject} />
      <h2>Other Projects</h2>
      <Row data-aos="fade-right" className="row">
        {threeCards}
      </Row>
      <div className="projects">
        <a href="/project">Discover Other Projects &gt;&gt;</a>
      </div>
    </div>
  );
};

export default OtherProjects;
