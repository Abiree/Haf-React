import React,{ useState,useEffect } from 'react';
import './Carbon.scss';
import {Button} from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Creditpop from '../Creditpop/Creditpop';
const Carbon = (props) => {
  const [carbon] = useState({
    "img":"./assets/carbon.png",
    "title":"Do you want to become carbon neutral",
    "paragraph":"Balance your carbon footprint by helping support carbon reduction projects. Use our Events Calculator to determine the unavoidable CO2 emissions for your event and purchase offsets to reduce your carbon footprint",
  });
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  /*----------------------------donate---------------------------------*/
  const [donatemodal, setdonateModal] = useState(false);
  const [donateunmountOnClose] = useState(false);
  const toggleDonateModal = () => {
    setdonateModal(!donatemodal);
    
    
  };

  return(
    <div className="Carbon" data-testid="Carbon">
        <section  data-aos="fade-right" className="carbonCredit">
          <div className="carbonText">
            <div className="projectText">
              <h1>{carbon.title}</h1>
              <p>{carbon.paragraph}</p>
              <div className = "carbonButton">
                <Button className="bfont-weight: 20px;tn" onClick={()=>toggleDonateModal()}>Buy Credit Carbon</Button>
              </div>
              <Creditpop modal={donatemodal} toggle={toggleDonateModal}  user={props.user}  unmountOnClose={donateunmountOnClose} Donate={props.Donate}  />
            </div>
          </div>
          <div className="carbonimg">
            {carbon.img==null? null:<img width="400px" className="img-fluid" src={carbon.img} alt="carbonimg"/> }
          </div>
        </section>
      </div>
  );
};


export default Carbon;
