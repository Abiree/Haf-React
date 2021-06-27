/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ProfilUpdates.scss';
import { Row, Spinner } from 'reactstrap';
import Search from '../../ContactUs/Search/Search';

const ProfilUpdates = ( props ) => {
  if ( props.profileLoading ) {
    return ( <div className="ProfilInfo" data-testid="ProfilInfo">
      <Spinner color="primary"/>
    </div> );
  }

  if ( !props.profile ) {
    return ( <div className="ProfilInfo" data-testid="ProfilInfo">
      you are not logged in
    </div> );
  }

  const userProjects = props.projects.filter( ( { _id } ) => {
    return props.profile.donations.some( include => include.projectId === _id )
  } );

  console.log( userProjects );

  const cards = userProjects.map( ( element ) => {
    if ( element.updates.length > 0 ) {
      return ( <Row key={element._id} className="row">
        <div className="cadre">
          <div className="element">
            <img className="img-fluid" src={"/api/images/" + element.image} width="200px" height="200px" alt="projectimg"/>
            <h6 className="title">
              <b>{element.title}</b>
            </h6>
            <p className="contribution">{element.updates[element.updates.length - 1]}</p>
          </div>
        </div>
        <div className="seeMore">
          <a className="seemorelink">see the project &gt;&gt;</a>
        </div>
      </Row> );
    }
    return null;
  } );

  return ( <div className="ProfilDonation" data-testid="ProfilDonation">
    <Search/>
    <div className="projects">
      {cards}
    </div>
  </div> );
};

export default ProfilUpdates;
