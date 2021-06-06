import React from 'react';
import PropTypes from 'prop-types';
import UpBar from './UpBar/UpBar';
import './Home.scss';

const Home = () => (
  <div className="Home" data-testid="Home">
    <UpBar/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
