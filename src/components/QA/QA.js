import React from 'react';
import PropTypes from 'prop-types';
import './QA.scss';
import Forum from '../ContactUs/Forum/Forum';
import Bar from '../ContactUs/Bar/Bar';
const QA = () => (
  <div className="QA" data-testid="QA">
     <Forum/>
     <Bar/>
  </div>
);

QA.propTypes = {};

QA.defaultProps = {};

export default QA;
