/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react';
import './ProjectsList.scss';
import Login from '../../UpBar/Login/Login';
import Register from '../../UpBar/Register/Register';
import './Filltrage.scss';
import {LocalForm,Control} from 'react-redux-form';
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
  Spinner,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import Donationpop from '../Donationpop/Donationpop';

const ProjectsList = (props) => {
  /*----------------------Pagination---------------------------------------------------*/
  const [pagination] = useState(props.pagination === undefined || props.pagination<1 ? 1 : props.pagination);
  const [data] = useState(props.projects);

  const [dropdownOpen, setOpen] = useState( false );
  const toggle1 = () => setOpen( !dropdownOpen );

  const [dropdownOpen2, setOpen2] = useState( false );
  const toggle2 = () => setOpen2( !dropdownOpen2 );

  const [dropdownOpen3, setOpen3] = useState( false );
  const toggle3 = () => setOpen3( !dropdownOpen3 );

  const filtre = (event) => {
    if(event.target.id==='category'){
      const query="category="+event.target.innerText;
      props.fetchPagination(pagination,query);
    }
    if(event.target.id==='updatedAt' || event.target.id==='totalDons'){
      if(event.target.innerText === 'desc'){
        const query = "orderby="+event.target.id;
        props.fetchPagination(pagination,query);
      }else{
        const query = "asc=true"+"&orderby="+event.target.id;
        props.fetchPagination(pagination,query);
      }
    }
  }
  const handleSubmit = ( values ) => {
    const {text} = values
    const query = "search="+text
    props.fetchPagination(pagination,query);
  }

  const handleKeyDown = (Event) => {
    if(Event.key === 'Enter'){
      if(data.length!=0){
      props.fetchPagination(Event.target.value, props.query)
      };
    }
    if(Event.target.id === 'next'){
      if(data.length!=0){
      props.fetchPagination(pagination+1, props.query);}
    }
    if(Event.target.id === 'previous'){
      props.fetchPagination(pagination-1, props.query);
    }
  }
  const [isOpen , setIsOpen] = useState(false);
  /*-------------------------------------------------------*/
  const [idProject, setIdProject] = useState("");
   /*----------------------------login---------------------------------*/
   const [loginmodal, setloginModal] = useState(false);
   const [loginunmountOnClose] = useState(false);
   const toggleLoginModal = () => setloginModal(!loginmodal);
  /*----------------------------donate---------------------------------*/
  const [donatemodal, setdonateModal] = useState(false);
  const [donateunmountOnClose] = useState(false);
  const toggleDonateModal = (id) => {
    setdonateModal(!donatemodal);
    setIdProject(id);
    console.log(id)
    
  };
  /*----------------------------Register-------------------------------*/
  const [registermodal, setregisterModal] = useState(false);
  const [registerunmountOnClose] = useState(false);
  const toggleRegisterModal = () => setregisterModal(!registermodal);
  



   const toggle = () => setIsOpen(!isOpen);


  const datamap = data.length===0 ? <div style={{"color":"white","text-align":"center","font-size":"20px","width":"100%"}}>No More Items</div>:data.map((element)=>{
    return(

      <Col id={element._id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img" src={"/api/images/"+element.image} alt={element.title}/>
          <CardBody className="text-center">
            <CardTitle tag="h6" className="text-align-center">{element.title}</CardTitle>
            <CardText className="parag">{element.description}</CardText>
            <a href={'./project/'.concat(element._id)} className="blue">view more</a>
            <div className="donators">
              <p className="donator">{element.donations.length} <br/> Donors</p>
              <p className="don">{element.totalDons} <br/> Donations</p>
            </div>
            <Button className="btn" onClick={()=>toggleDonateModal(element._id)}>Donate</Button>
          </CardBody>
        </Card>
      </Col>


    );
  })
  return(
    <div className="ProjectsList" data-testid="ProjectsList">
        <> < div className = "intro" id = "search" > <div className="div1">
          <ButtonDropdown id='category' isOpen={dropdownOpen} toggle={toggle1} onClick={filtre}>
            <DropdownToggle caret="caret" id="dropdowntoggle">
              Category
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="category">health
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown id='date' isOpen={dropdownOpen2} toggle={toggle2} onClick={filtre}>
            <DropdownToggle caret="caret" id="dropdowntoggle">
              date
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="updatedAt" >desc
              </DropdownItem>
              <DropdownItem id="updatedAt">asc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown isOpen={dropdownOpen3} toggle={toggle3} onClick={filtre}>
            <DropdownToggle caret="caret" id="dropdowntoggle">
              totalDons
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="totalDons" >desc
              </DropdownItem>
              <DropdownItem id="totalDons" >asc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className="div2">
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <input type="hidden" name="search_param" value="all" id="search_param"/>
            <Control.text model=".text" className="form-control resize" type="text" name="x" placeholder="Search"/>
            <Button className="btn">
              <i className="fa fa-search"></i>
            </Button>
          </LocalForm>
        </div> </div>

      </>
      <Donationpop modal={donatemodal} toggle={toggleDonateModal}  user={props.user}  unmountOnClose={donateunmountOnClose} Donate={props.Donate} idProject={idProject} />

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
