import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import {Button} from 'reactstrap';
const Header = () => (
  <div className="Header" data-testid="Header">
    <div className="ProfileSection">
                <div className="Profil">
                    <i id="cam" className="fa fa-camera"></i>
                </div>
                </div>
                <div className="ProfileSectionInfo">
                  <div className="subsection">
                      <h5>User User</h5>
                      <Button className="btn">
                      Edit the profile <i className="fa fa-cog"></i>
                      </Button>
                  </div>
                 </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
