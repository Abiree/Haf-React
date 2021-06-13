import React,{useState} from 'react';
import './ProfilInfo.scss';

const ProfilInfo = (props) => {
  const [info] = useState(props.profile);

  return(
    <div className="ProfilInfo" data-testid="ProfilInfo">
      <h6 className="title"><b>First Name :</b></h6>
      <p>{info.FirstName}</p>
      <h6 className="title"><b>Last Name :</b></h6>
      <p>{info.LastName}</p>
      <h6 className="title"><b>Email :</b></h6>
      <p>{info.Email}</p>
      <h6 className="title"><b>Phone :</b></h6>
      <p>{info.Phone}</p>
      <h6 className="title"><b>Adress :</b></h6>
      <p>{info.Adress}</p>
    </div>
  );
  
};

export default ProfilInfo;
