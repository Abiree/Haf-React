/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import Search from '../../ContactUs/Search/Search';
import {Row} from 'reactstrap';
import './ProfilDonation.scss';

const ProfilDonation = (props) => {
  const [projects] = useState(props.projects);
  const [Donations] = useState(props.profile.Donations);

  const cards = projects.map((element,index)=>{
    return(
      <Row key={element.id} className="row">
        <div className="cadre">
          <div className="element">
            <img className="img-fluid elemntImg" src={element.img} width="400px" alt="projectimg"/>
            <h6 className="title"><b>{element.title}</b></h6>
            <p className="contribution">My Contribution : {Donations[index].contribution} $</p>
            <p className="donations">Number of Donations : {Donations[index].nOfDonations} times</p>
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
