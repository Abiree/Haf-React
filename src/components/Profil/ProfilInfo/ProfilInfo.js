import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './ProfilInfo.scss';

const ProfilInfo = () => {
  const [info, setInfo] = useState({
    "FirstName":"user",
    "LastName":"user",
    "Email":"user@email.com",
    "Phone":"+212 666 666 666",
    "Adress":"City , Street"
  })

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

ProfilInfo.propTypes = {};

ProfilInfo.defaultProps = {};

export default ProfilInfo;
