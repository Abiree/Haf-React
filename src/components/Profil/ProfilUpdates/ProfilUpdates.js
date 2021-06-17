/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ProfilUpdates.scss';
import {Row,Spinner} from 'reactstrap';
import Search from '../../ContactUs/Search/Search';

const ProfilUpdates = (props) => {
  if(props.profileLoading){
    return (
      <div className="ProfilInfo" data-testid="ProfilInfo">
        <Spinner color="primary"/>
      </div>
    );
  }

  const userProjects = props.projects.filter(({id})=>{
    return props.profile.Donations.some(include => include.ProjectId === id)
  });

  const cards = userProjects.map((element)=>{    
      if(element.Updates.length>0){
        return(
          <Row key={element.id} className="row">
            <div className="cadre">
              <div className="element">
                <img className="img-fluid" src={element.img} width="400px" alt="projectimg"/>
                <h6 className="title"><b>{element.title}</b></h6>
                <p className="contribution">{element.Updates[element.Updates.length-1].Update}</p>
              </div>
            </div>
            <div className="seeMore">
              <a className="seemorelink">see the project &gt;&gt;</a>
            </div>
          </Row>
        );
      } 
        return null;
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

export default ProfilUpdates;
