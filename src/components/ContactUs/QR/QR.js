/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './QR.scss';
import { Row } from 'react-bootstrap';

const QR = ( props ) => {
  const [ data ] = useState( props.questions );
  const datamap = data.map( ( element ) => {
    return ( <div key={element.id} className="row">
      <div className="question">
        <span>
          <strong>Q:
          </strong>
        </span>
        <span>{element.question}</span>
      </div>
      <div className="response">
        <span>
          <strong>R:
          </strong>
        </span>
        <span>{element.answer}</span>
      </div>
      <div className="see">
        <a href="#">More&gt;&gt;
        </a>
      </div>
    </div> );
  } )
  return ( <div className="QR" data-testid="QR">
    <div className="q-a">
      {datamap}
    </div>
  </div> );
}

export default QR;
