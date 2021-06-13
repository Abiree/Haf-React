import React from 'react';
import './Contact.scss';

const Contact = () => (
  <div className="Contact" data-testid="Contact">
     <div class="form-group" className="form"> 
        <label>Send a message :</label>
        <input class="form-control" type="text" id="Name" placeholder="Name"/>
        <input class="form-control" type="email" id="Email" placeholder="Email"/>
        <input class="form-control" type="text" id="Subject" placeholder="Subject"/>
        <textarea class="form-control" rows="5" id="message" placeholder="Message"/>
        <div class="button">
          <button class="btn btn-primary" type="submit">submit</button>
        </div>
      </div>
  </div>
);

export default Contact;
