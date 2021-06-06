import React from 'react';
import PropTypes from 'prop-types';
import UpBar from './UpBar/UpBar';
import Intro from './Intro/Intro';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import './Home.scss';

const Home = () => (
  <div className="Home" data-testid="Home">
    <UpBar/>
    <Intro/>
    <Numbers/>
    <TodaysProject/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
