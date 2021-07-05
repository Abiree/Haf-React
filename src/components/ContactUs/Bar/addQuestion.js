import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Input } from 'reactstrap';

const AddQuestion = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const sendData = () => {
    const data = document.getElementById('field').value;
    props.addQuestion(data);
    toggle();
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input id="field" placeholder="type question ..."></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={sendData}>Send</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddQuestion;