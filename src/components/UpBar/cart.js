import {  NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavItem ,Button, Spinner } from 'reactstrap';
import {useState,useEffect} from 'react';
import {
  Redirect
} from "react-router-dom";



const Cart = (props) => {
  
  const [toNext, setToNext] = useState(false)

  //useEffect(()=>{setToNext(false)},[])

  
  const handleSubmit = (values) => {
  
    if(props.user == null   ){
     
     
    }
    else{
      
     
      setToNext(true)
    }
    
  }

  /*----------------------------Dropdown-------------------------------*/
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrop = () => setDropdownOpen(prevState => !prevState);

      let input = 0;

      const itemo = props.trees.filter(( { _id } ) => {
        return props.user==null || props.userLoading ? null:props.user.cart.some( include => include.treeId === _id )
      });

      const remove = (id) => {
        props.removeFromCart(props.user._id,id)
      }

      const Item = itemo.map((element,index)=>{
        console.log(props.user.cart[index].quantity)
        console.log(element.price)
        input = input + (Number(props.user.cart[index].quantity) * Number(element.price.mad))

        return(
          <DropdownItem key={element._id}>
            <div style={{"display": "flex" , "justify-content" : "space-between", "align-items" : "center" , "padding" : "7px" , "width":"200px"}} >
              <div style={{"display": "flex" , "justify-content" : "center", "align-items" : "center"}}>
                <img style={{"margin":"0px"}} src={"/api/images/"+element.picture} width="30px" height="30px" />
                <div>
                  <div style={{"margin":"0px 0px 0px 5px" , "font-size":"12px" ,"white-space": "pre-wrap" }}>
                  {element.name} <br/>
                  <span style={{"font-size":"10px"}}>{props.user.cart[index].quantity} trees</span>
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
                          {props.user==null? 0 : props.user.cart.length}
                        </span>
                      </a>
                    </DropdownToggle>
                    <DropdownMenu left>
                      <DropdownItem header>Trees</DropdownItem>
                       {props.userLoading? <div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="light" /></div> :Item}
                      <DropdownItem divider/>
                      <DropdownItem style={{"display":"flex","justify-content":"space-between","font-size":"12px"}}><span>Total : </span><span>{input}$</span></DropdownItem>
                     
                      <DropdownItem>
                      {toNext ? <Redirect to={{
                      pathname: '/buy',
                      state: { input: {input},
                      name:"Trees"

                   }
                  }} /> : null}
                        <Button className="btn btn-primary" style={{"width":"100%"}} onClick={handleSubmit}>Buy</Button></DropdownItem>
                    </DropdownMenu>

                  </Dropdown>
      );
    
}
export default Cart;