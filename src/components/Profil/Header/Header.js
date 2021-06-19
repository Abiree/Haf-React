import React from 'react';
import './Header.scss';
import {Button} from 'reactstrap';
const Header = (props) => {
  const url = !props.profile? "url(https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png)":"url(https://hafbackend.herokuapp.com/api/images/"+props.profile.picture+")";
  console.log(url);
  return(
    <div className="Header" data-testid="Header">
      <div className="ProfileSection">
        <div className="Profil" style={{"background-image":url}}>
          <i id="cam" className="fa fa-camera"></i>
        </div>
      </div>
      <div className="ProfileSectionInfo">
        <div className="subsection">
          <h5>{props.profile? props.profile.name:"User"}</h5>
          <Button className="btn">
            Edit the profile <i className="fa fa-cog"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
