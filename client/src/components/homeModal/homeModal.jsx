import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeModal = ({ showModal, setShowModal }) => {
  const [roomNumber, setRoomNumber] = useState("");
  const handleRoomNumberChange = event => {
    const roomNumber = event.target.value;
    setRoomNumber(roomNumber);
  };
  return (
    <Modal show={showModal} centered>
      <Modal.Body>
        <Wrapper>
          <Left>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Insert Room #"
              value={roomNumber}
              onChange={e => handleRoomNumberChange(e)}
            />
          </Left>
          <Right>
            <Link to={`/room/${roomNumber}`}>
              <Button variant="primary" size="lg">
                CONFIRM
              </Button>
            </Link>
          </Right>
        </Wrapper>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  margin: auto;
`;

const Right = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

HomeModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
};

export default HomeModal;
