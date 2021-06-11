import React,{useState} from 'react';
import Search from '../../ContactUs/Search/Search';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';
import './ProfilDonation.scss';

const ProfilDonation = () => {
  const [projects, setprojects] = useState(
  [
    {
      "image":"./assets/project.png",
      "title":"Multicultiral Cooperation for fruit",
      "myContribution":15,
      "N_of_donations":3
    },
    {
      "image":"./assets/project.png",
      "title":"Multicultiral Cooperation for fruit",
      "myContribution":15,
      "N_of_donations":3
    }
  ]);

  const cards = projects.map((elements)=>{
    return(
      <Row className="row">
        <div className="cadre">
          <div className="element">
            <img className="elemntImg" src={elements.image} alt="projectimg"/>
            <h6 className="title"><b>{elements.title}</b></h6>
            <p className="contribution">My Contribution : {elements.myContribution} $</p>
            <p className="donations">Number of Donations : {elements.N_of_donations} times</p>
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

ProfilDonation.propTypes = {};

ProfilDonation.defaultProps = {};

export default ProfilDonation;
