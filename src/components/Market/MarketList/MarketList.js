import React, { useState }  from 'react';
import './MarketList.scss';
import { 
  Col,
  Row 
} from 'react-bootstrap';
import {LocalForm,Control} from 'react-redux-form';
import{
  Card,
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button,
  Spinner,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { 
  Pagination,
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';
import Treepop from '../Treepop/Treepop';

const MarketList = (props) => {

  const [pagination] = useState(props.pagination === undefined || props.pagination<1 ? 1 : props.pagination);
  const [data] = useState(props.trees);
  /*-----------------------------------------------------------*/
  const [dropdownOpen2, setOpen2] = useState(false);
  const toggle2 = () => setOpen2(!dropdownOpen2);
  /*-----------------------------------------------------------*/
  const [isOpen , setIsOpen] = useState(false);
  /*-------------------------------------------------------*/
  const [idProject, setIdProject] = useState("");
   /*----------------------------tree---------------------------------*/
   const [treemodal, settreeModal] = useState(false);
   const [treeunmountOnClose] = useState(false);
   const toggleTreeModal = (id) => {
     settreeModal(!treemodal);
     setIdProject(id);
     console.log(id)
   };
   const toggle = () => setIsOpen(!isOpen); 
  
  const filtre = (event) => {
    if(event.target.id==='name'){
      let query = "";
      if(event.target.innerText === 'desc'){
          query = "orderby="+event.target.id;
          props.fetchTreePagination(pagination,query);
        }else{
          query = "asc=true"+"&orderby="+event.target.id;
          props.fetchTreePagination(pagination,query);
      }
    }

  }

  const handleSubmit = ( values ) => {
    const {text} = values
    const query = "search="+text
    props.fetchTreePagination(pagination,query);
  }

  const handleKeyDown = (Event) => {
    if(Event.key === 'Enter'){
      if(data.length!=0){
      props.fetchTreePagination(Event.target.value, props.query)
      };
    }
    if(Event.target.id === 'next'){
      if(data.length!=0){
      props.fetchTreePagination(pagination+1, props.query);}
    }
    if(Event.target.id === 'previous'){
      props.fetchTreePagination(pagination-1, props.query);
    }
  }

  const datamap = data.length===0 ? <div style={{"color":"white","text-align":"center","font-size":"20px","width":"100%"}}>No More Items</div>: data.map((element)=>{
    return(
      <Col key={element._id} xs="12" sm="6" md="4" lg="3" className="col">
        <Card className="card">
          <CardImg top  className="img"  src={"/api/images/"+element.picture} alt={element.name}/>
          <CardBody className="text-center">
            <CardTitle tag="h5" className="text-align-center">{element.name}</CardTitle>
            {/*<CardText className="category">{element.category}</CardText>*/}
            <CardText className="price">{element.price.mad} DH / {element.price.usd} USD</CardText>
            <CardText>
              <a href={'./Market/'.concat(element._id)} className="blue">view more</a>
            </CardText>
            <Button className="btn" onClick={()=>toggleTreeModal(element._id)}>Add to Cart</Button>
          </CardBody>
        </Card>
      </Col>
    );
  })
  return(
    <div  data-testid="MarketList">
      
       <> 
      <div className="introo"  >
            <div className="div1">
              <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2} onClick={filtre}>
                <DropdownToggle caret="caret" id="dropdowntoggle">
                  Name
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem id="name" >desc
                  </DropdownItem>
                  <DropdownItem id="name">asc</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div> 
            <div className="div2">
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <div style={{
              'width' : '100%',
              'display' : 'flex',
              'justify-content' : 'center'}}>
                <input type="hidden" name="search_param" value="all" id="search_param"/>
                <Control.text model=".text" className="form-control resize" type="text" name="x" placeholder="Search"/>
                <Button className="btn">
                  <i className="fa fa-search"></i>
                </Button>
            </div>
          </LocalForm>
        </div>
          </div>     
      </> 
      <Treepop addToCart={props.addToCart} modal={treemodal} toggle={toggleTreeModal}  user={props.user}  unmountOnClose={treeunmountOnClose} Tree={props.Tree} treeId={idProject} />
      <h2>Market</h2>
      <div className="MarketList">
      
      <Row>
        {props.treesLoading?<div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="light" /></div> : datamap}
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
    </div>
  );
};

export default MarketList;
