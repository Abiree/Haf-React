import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import './Tree.scss';
import {Button} from 'reactstrap';

const Tree = () => {
  const [tree, setTree] = useState({
    "img":"./assets/trees.jpg",
    "title":"Achieve the goal of 10M trees planted",
    "paragraph":"A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people",
  });
  return(
    <div className="Tree" data-testid="TodaysProject">
        <section className="TreeSection">
          <div className="TreeImg">
            {tree.img==null? null:<img width="400px" class="img-fluid" src={tree.img} alt="treeimg"/> }
          </div>
          <div className="TreeText">
            <div className="TreeSubText">
              <h1>{tree.title}</h1>
              <p>{tree.paragraph}</p>
              <div className = "treeButtons">
                <Button className="bfont-weight: 20px;tn">Carbon Calculator</Button>
              </div>
            </div>
          </div> 
        </section>
      </div>
  );
};

Tree.propTypes = {};

Tree.defaultProps = {};

export default Tree;
