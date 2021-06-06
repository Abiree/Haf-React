import React from 'react';
import PropTypes from 'prop-types';
import './Intro.scss';
import { Button } from 'reactstrap';

const Intro = () => (
  <div className="Intro" style={{backgroundImage : "url(./assets/intro.jpg)",backgroundSize: "cover"}} data-testid="Intro">
    <div className="IntroText">
      <div className="elements">
        <h1>A Big Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur vel tortor purus. Donec in tincidunt du Sed congue 
          ut purus vel molestie. Phasellus eu malesuada lacus. Intel lacinia 
          at lectus sit amet fermentum. Curabitur sit amet laoreet ligula,
          at aliquet sem. Nulla facilisi.
        </p>
        <div className="IntroButtons">
          <Button className="btn">Donate Now</Button>
          <a href="#">How It Works ?</a>
        </div>
      </div>
    </div>
  </div>
);

Intro.propTypes = {};

Intro.defaultProps = {};

export default Intro;
