import React,{ useState,useEffect } from 'react';
import './Tree.scss';
import {Button} from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Tree = () => {
  const [tree] = useState({
    "img":"./assets/trees.jpg",
    "title":"Achieve the goal of 10M trees planted",
    "paragraph":"A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people",
  });
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  return(
    <div className="Tree" data-testid="TodaysProject">
        <section data-aos="fade-left" className="TreeSection">
          <div className="TreeImg">
            {tree.img==null? null:<img width="400px" className="img-fluid" src={tree.img} alt="treeimg"/> }
          </div>
          <div className="TreeText">
            <div className="TreeSubText">
              <h1>{tree.title}</h1>
              <p>{tree.paragraph}</p>
              <div className = "treeButtons">
                <Button className="bfont-weight: 20px;tn" href='./Market'>Buy Trees</Button>
              </div>
            </div>
          </div> 
        </section>
      </div>
  );
};


export default Tree;
