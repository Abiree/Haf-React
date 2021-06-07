import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro/Intro';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import './Home.scss';
import OtherProjects from './OtherProjects/OtherProjects';

const Home = () => (
  <div className="Home" data-testid="Home">
    <Intro/>
    <Numbers/>
    <TodaysProject/>
    <OtherProjects/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
