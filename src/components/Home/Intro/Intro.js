/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Intro.scss';
import { Button } from 'reactstrap';

const Intro = () => (
  <div className="Intro" style={{backgroundImage : "url(./assets/intro.jpg)",backgroundSize: "cover"}} data-testid="Intro">
    <div className="IntroText">
      <div className="elements">
        <h1>About Us</h1>
        <p>
        The High Atlas Foundation is a Moroccan association and a U.S. 501(c)(3) nonprofit organization founded in 2000 by former Peace Corps Volunteers committed to furthering sustainable development. HAF supports Moroccan communities to take action in implementing human development initiatives. HAF promotes organic agriculture, women’s empowerment, youth development, education, and health. Since 2011, HAF has Consultancy Status at the United Nations Economic and Social Council.

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