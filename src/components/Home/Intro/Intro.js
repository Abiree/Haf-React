/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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
          <Button className="btn" href='./project'>Donate Now</Button>
          <a href="./ContactUs">How It Works ?</a>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
