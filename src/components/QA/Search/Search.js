import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import { Button} from 'reactstrap';

const Search = () => (
  <div className="Search" data-testid="Search" id="search">
     <div className="div2">
        <input type="hidden" name="search_param" value="all" id="search_param"/>
        <input className="form-control " type="text" name="x" placeholder="Search"/>
        <Button className="btn"><i className="fa fa-search"></i></Button>
      </div>
  </div>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
