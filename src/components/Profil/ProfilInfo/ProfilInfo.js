import React from 'react';
import './ProfilInfo.scss';
import {Spinner} from 'reactstrap';

const ProfilInfo = (props) => {
  if(props.profileLoading){
    return (
      <div className="ProfilInfo" data-testid="ProfilInfo">
        <Spinner color="primary"/>
      </div>
    );
  }
  return(
    <div className="ProfilInfo" data-testid="ProfilInfo">
      <h6 className="title"><b>First Name :</b></h6>
      <p>{props.profile.FirstName}</p>
      <h6 className="title"><b>Last Name :</b></h6>
      <p>{props.profile.LastName}</p>
      <h6 className="title"><b>Email :</b></h6>
      <p>{props.profile.Email}</p>
      <h6 className="title"><b>Phone :</b></h6>
      <p>{props.profile.Phone}</p>
      <h6 className="title"><b>Adress :</b></h6>
      <p>{props.profile.Adress}</p>
    </div>
  );
  
};

export default ProfilInfo;
