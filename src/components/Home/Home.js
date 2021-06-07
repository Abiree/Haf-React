import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro/Intro';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import './Home.scss';
import OtherProjects from './OtherProjects/OtherProjects';
import Achievements from './Achievements/Achievements';

const Home = () => (
  <div className="Home" data-testid="Home">
    <Intro/>
    <Numbers/>
    <TodaysProject/>
    <OtherProjects/>
    <Achievements/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
