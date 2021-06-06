import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filltrage.scss';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Filltrage = (props) =>{
  const [data, setData] = useState([{"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},
  {"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},
  {"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":600,"dons":400},{"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},
  {"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},{"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":600,"dons":400},
  {"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},{"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":500,"dons":300},
  {"img":"./assets/project.png","title":"A big title","para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt dui. Sed congue ut purus vel molestie","donator":600,"dons":400}]);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const [dropdownOpen2, setOpen2] = useState(false);
  const toggle2 = () => setOpen2(!dropdownOpen2);

  const [dropdownOpen3, setOpen3] = useState(false);
  const toggle3 = () => setOpen3(!dropdownOpen3);

  const [dropdownOpen4, setOpen4] = useState(false);
  const toggle4 = () => setOpen4(!dropdownOpen4);
  return(
    <> 
      <div class="intro" id="search">
        <div>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret id="dropdowntoggle">
              Category
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Economic Growth </DropdownItem>
              <DropdownItem>Education</DropdownItem>
              <DropdownItem >Climate Action </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
            <DropdownToggle caret id="dropdowntoggle">
            Date
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Desc </DropdownItem>
              <DropdownItem >Asc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown isOpen={dropdownOpen3} toggle={toggle3}>
            <DropdownToggle caret id="dropdowntoggle">
            Donors
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Desc </DropdownItem>
              <DropdownItem >Asc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown isOpen={dropdownOpen4} toggle={toggle4}>
            <DropdownToggle caret id="dropdowntoggle">
            Donations
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Desc </DropdownItem>
              <DropdownItem >Asc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div> 
        <div class="div2">
          <input type="hidden" name="search_param" value="all" id="search_param"/>
          <input class="form-control resize" type="text" name="x" placeholder="Search"/>
          <button class="btn btn-default resize" type="button"><span class="fa fa-search " aria-hidden="true" class="maxwidth"></span></button>
        </div>
      </div>
       
        
        
  </>
  
        
     
    
  );
  
} 

Filltrage.propTypes = {};

Filltrage.defaultProps = {};

export default Filltrage;
