import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import './Carbon.scss';
import {Button} from 'reactstrap';

const Carbon = () => {
  const [carbon, setCarbon] = useState({
    "img":"./assets/carbon.png",
    "title":"Do you want to become carbon neutral",
    "paragraph":"Balance your carbon footprint by helping support carbon reduction projects. Use our Events Calculator to determine the unavoidable CO2 emissions for your event and purchase offsets to reduce your carbon footprint",
  });
  return(
    <div className="Carbon" data-testid="Carbon">
        <section className="carbonCredit">
          <div className="carbonText">
            <div className="projectText">
              <h1>{carbon.title}</h1>
              <p>{carbon.paragraph}</p>
              <div className = "carbonButton">
                <Button className="bfont-weight: 20px;tn">Carbon Calculator</Button>
              </div>
            </div>
          </div>
          <div className="carbonimg">
            {carbon.img==null? null:<img width="400px" class="img-fluid" src={carbon.img} alt="carbonimg"/> }
          </div>
        </section>
      </div>
  );
};

Carbon.propTypes = {};

Carbon.defaultProps = {};

export default Carbon;
