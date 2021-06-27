/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Search from '../../ContactUs/Search/Search';
import { Row, Spinner } from 'reactstrap';
import './ProfilDonation.scss';

const ProfilDonation = ( props ) => {
  if ( props.profileLoading ) {
    return ( <div className="ProfilDonation" data-testid="ProfilDonation">
      <Spinner color="primary"/>
    </div> );
  }
  if ( !props.profile ) {
    return ( <div className="ProfilInfo" data-testid="ProfilInfo">
      you are not logged in
    </div> );
  }
  /* -------------------- duplicated elements----------------------- */
  const summingDonations = props.profile.donations.reduce( ( a, { projectId, amount } ) => ( a[ projectId ] = ( a[ projectId ] || 0 ) + amount, a ), {} );
  const appearanceTime = props.profile.donations.reduce( ( obj, { projectId } ) => ( obj[ projectId ] = ( obj[ projectId ] || 0 ) + 1, obj ), {} );
  /* ----------------------filter list----------------------------- */
  const userProjects = props.projects.filter( ( { _id } ) => {
    return props.profile.donations.some( include => include.projectId === _id )
  } );

  const cards = userProjects.map( ( element ) => {
    const id = element._id
    return ( <Row key={element.projectId} className="row">
      <div className="cadre">
        <div className="element">
          {<img className="img-fluid elemntImg" src={"/api/images/" + element.image} width="200px" height="200px" alt="projectimg"/>}
          <h6 className="title">
            <b>{element.title}</b>
          </h6>
          <p className="contribution">My Contribution : {summingDonations[ id ]}
            DH</p>
          <p className="donations">donatedAt : {appearanceTime[ id ]}
            times</p>
        </div>
      </div>
      <div className="seeMore">
        <a className="seemorelink" href={"/project/" + id}>see the project &gt;&gt;</a>
      </div>
    </Row> );
  } );
  return ( <div className="ProfilDonation" data-testid="ProfilDonation">
    <Search/>
    <div className="projects">
      {cards}
    </div>
  </div> );

};

export default ProfilDonation;
