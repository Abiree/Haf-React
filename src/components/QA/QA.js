import React from 'react';
import PropTypes from 'prop-types';
import './QA.scss';
import Forum from '../ContactUs/Forum/Forum';
import Bar from '../ContactUs/Bar/Bar';
import QR from '../ContactUs/QR/QR';
const QA = () => (
  <div className="QA" data-testid="QA">
     <Forum/>
     <Bar/>
     <QR/>
  </div>
);

QA.propTypes = {};

QA.defaultProps = {};

export default QA;
