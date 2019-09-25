import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HomeModal from "../components/homeModal/homeModal";

const Home = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleUsernameChange = event => {
    const username = event.target.value;
    setUsername(username);
  };
  useEffect(() => console.log(showModal));
  return (
    <HomeBox>
      <HomeModal showModal={showModal} setShowModal={setShowModal} />
      <Top>
        <Form.Label>Insert your username here</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          placeholder="username"
          value={username}
          onChange={e => handleUsernameChange(e)}
        />
      </Top>
      <Bottom>
        <Button variant="primary" size="lg" onClick={() => createNewGame()}>
          Create a game
        </Button>
        OR
        <Button variant="danger" size="lg" onClick={() => setShowModal(true)}>
          Join a room
        </Button>
      </Bottom>
    </HomeBox>
  );
};

const createNewGame = () => {
  //TODO: Ask server for a unique id and create game
};

export default Home;

/// STYLED COMPONENTS

const HomeBox = styled.div`
  background: #9be7ff;
  color: black;
  font-size: 2em;
  width: 700px;
  height: 400px;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  text-transform: uppercase;
`;

const Top = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
