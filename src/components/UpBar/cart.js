import {  NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavItem , Button } from 'reactstrap';
import {useState} from 'react';



const Cart = (props) => {
  /*----------------------------Dropdown-------------------------------*/
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrop = () => setDropdownOpen(prevState => !prevState);

  const itemo = props.trees.filter(( { _id } ) => {
    return props.cart.some( include => include.treeId === _id )
  });

  const remove = (id) => {
    console.log(id);
  }

  const Item = itemo.map((element,index)=>{
    return(
      <DropdownItem key={element._id}>
        <div style={{"display": "flex" , "justify-content" : "space-between", "align-items" : "center" , "padding" : "7px" , "width":"200px"}} >
          <div style={{"display": "flex" , "justify-content" : "center", "align-items" : "center"}}>
            <img style={{"margin":"0px"}} src={"/api/images/"+element.picture} width="30px" height="30px" />
            <div>
              <div style={{"margin":"0px 0px 0px 5px" , "font-size":"12px" ,"white-space": "pre-wrap" }}>
              {element.name} <br/>
              <span style={{"font-size":"10px"}}>{props.cart[index].quantity} trees</span>
              </div> 
            </div>
          </div>
          <Button className="btn btn-danger" style={{"padding":"0px 7px 0px 7px"}} onClick={()=>remove(element._id)}>X</Button>
        </div>
      </DropdownItem>
    );
  })
 

  return(
    <Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                <DropdownToggle style={{"display":"flex", "justify-content":"center", "background-color":"transparent", "border":"none" , "margin-top":"5px"}} caret>
                  <a className="cart position-relative d-inline-flex" aria-label="View your shopping cart" disabled>
                    <i className="fas fa fa-shopping-cart fa-lg"></i>
                    <span className="cart-basket d-flex align-items-center justify-content-center">
                      {props.cartLength}
                    </span>
                  </a>
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem header>Trees</DropdownItem>
                  {Item}
                </DropdownMenu>
              </Dropdown>
  );
}
export default Cart;