import React, { useState } from 'react';
import './Filltrage.scss';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import {LocalForm,Control} from 'react-redux-form';
const Filltrage = ( props ) => {
  const [dropdownOpen, setOpen] = useState( false );
  const toggle = () => setOpen( !dropdownOpen );

  const [dropdownOpen2, setOpen2] = useState( false );
  const toggle2 = () => setOpen2( !dropdownOpen2 );

  const [dropdownOpen3, setOpen3] = useState( false );
  const toggle3 = () => setOpen3( !dropdownOpen3 );

  const filtre = (event) => {
    if(event.target.id==='category'){
      const query="category="+event.target.innerText+"&limit=99";
      props.fetchWithFilters(query);
    }
    if(event.target.id==='updatedAt' || event.target.id==='totalDons'){
      if(event.target.innerText === 'desc'){
        const query = "orderby="+event.target.id+"&limit=99";
        props.fetchWithFilters(query);
      }else{
        const query = "asc=true"+"&orderby="+event.target.id+"&limit=99"
        props.fetchWithFilters(query);
      }
    }
  }
  const handleSubmit = ( values ) => {
    const {text} = values
    const query = "search="+text
    console.log(query);
    props.fetchWithFilters(query)
  }

  return ( <> <div className = "intro" id = "search" > <div className="div1">
    <ButtonDropdown id='category' isOpen={dropdownOpen} toggle={toggle} onClick={filtre}>
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

</ > );

}

export default Filltrage;
