/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Search from '../../ContactUs/Search/Search';
import {Row,Spinner} from 'reactstrap';
import './ProfilDonation.scss';

const ProfilDonation = (props) => {
  
  if(props.profileLoading){
    return(
      <div className="ProfilDonation" data-testid="ProfilDonation">
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
    
    const cards = props.profile.donations.map((element)=>{
      return(
        <Row key={element.projectId} className="row">
          <div className="cadre">
            <div className="element">
              {/*<img className="img-fluid elemntImg" src={element.img} width="400px" alt="projectimg"/>*/}
              <h6 className="title"><b>{element.projectTitle}</b></h6>
              <p className="contribution">My Contribution : {element.amount} DH</p>
              <p className="donations">donatedAt : {element.donatedAt} times</p>
            </div>
          </div>
          <div className="seeMore">
              <a className="seemorelink">see the project &gt;&gt;</a>
          </div>
        </Row>
      );
    });
    return(
      <div className="ProfilDonation" data-testid="ProfilDonation">
        <Search/>
        <div className="projects">
          {cards}
        </div>
      </div>
    );
  
};


export default ProfilDonation;
