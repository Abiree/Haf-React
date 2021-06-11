import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './ProfilUpdates.scss';
import {Row} from 'reactstrap';
import Search from '../../ContactUs/Search/Search';

const ProfilUpdates = () => {
  const [projects, setprojects] = useState(
  [
    {
      "image":"./assets/project.png",
      "title":"Multicultiral Cooperation for fruit",
      "update":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt du Sed congue ut purus vel molestie. Phasellus eu malesuada lacus. Intel lacinia at lectus sit amet fermentum. Curabitur sit amet laoreet ligula, at aliquet sem.Phasellus eu malesuada lacus. Intel lacinia at lectus sit amet fermentum. Curabitur sit amet laoreet ligula, at aliquet sem....",
    },
    {
      "image":"./assets/project.png",
      "title":"Multicultiral Cooperation for fruit",
      "update":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel tortor purus. Donec in tincidunt du Sed congue ut purus vel molestie. Phasellus eu malesuada lacus. Intel lacinia at lectus sit amet fermentum. Curabitur sit amet laoreet ligula, at aliquet sem.Phasellus eu malesuada lacus. Intel lacinia at lectus sit amet fermentum. Curabitur sit amet laoreet ligula, at aliquet sem....",
    }
  ]);

  const cards = projects.map((elements)=>{
    return(
      <Row className="row">
        <div className="cadre">
          <div className="element">
            <img className="elemntImg" src={elements.image} alt="projectimg"/>
            <h6 className="title"><b>{elements.title}</b></h6>
            <p className="contribution">{elements.update}</p>
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

ProfilUpdates.propTypes = {};

ProfilUpdates.defaultProps = {};

export default ProfilUpdates;
