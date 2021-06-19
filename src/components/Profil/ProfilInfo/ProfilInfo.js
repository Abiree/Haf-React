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
  if(!props.profile){
    return(
      <div className="ProfilInfo" data-testid="ProfilInfo">
        you are not logged in
      </div>
    );
  }
  return(
    <div className="ProfilInfo" data-testid="ProfilInfo">
      <h6 className="title"><b>Name :</b></h6>
      <p>{props.profile.name}</p>
      <h6 className="title"><b>Type :</b></h6>
      <p>{props.profile.type}</p>
      <h6 className="title"><b>Email :</b></h6>
      <p>{props.profile.email}</p>
      <h6 className="title"><b>Phone :</b></h6>
      <p>{props.profile.phone}</p>
      <h6 className="title"><b>Adress :</b></h6>
      <p>{props.profile.address}</p>
      <h6 className="title"><b>Created at :</b></h6>
      <p>{props.profile.createdAt}</p>
    </div>
  );
  
};

export default ProfilInfo;
