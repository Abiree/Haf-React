import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './QR.scss';
import {Data} from './Data';
import { 
  Pagination,
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';
import {Row} from 'react-bootstrap';

const QR = () => {
  const [data,setData] = useState(Data);
  const datamap = data.map((element)=>{
    return(
      
      <div className="row"> 
        <div className="question"><span> <strong>Q: </strong></span>
          <span>{element.question}</span>
        </div>
        <div className="response">
          <span> <strong>R: </strong></span><span>{element.answer}</span></div>
          <div className="see"><a href="#">More>> </a></div>
        </div>
        
      
      
    );
  })
  return(
  <div className="QR" data-testid="QR">
    <div className="q-a">
    {datamap}
    </div>
    <Row className="pagination">
          <Pagination size="sm" aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </Row>
     
  </div>
);
  }

QR.propTypes = {};

QR.defaultProps = {};

export default QR;
