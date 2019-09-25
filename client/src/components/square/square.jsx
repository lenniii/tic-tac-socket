import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import propTypes from "prop-types";

const Square = ({ setGameState, position, gameState, setTurn, isXTurn }) => {
  const handleClick = () => {
    if (gameState[position] != null) return;
    gameState[position] = getPlayer();
    setGameState(gameState);
    setTurn(!isXTurn);
  };

  const getPlayer = () => (isXTurn ? "X" : "O");

  return (
    <Cell onClick={() => handleClick()}>
      <div>{gameState[position]}</div>
    </Cell>
  );
};

export default Square;

const Cell = styled.td`
  cursor: pointer;
  border-radius: 5px;
  background: ${darken(0.3, "#9be7ff")};
  font-size: 30px;
  width: 33.3%;
  height: 33.3%;
  text-align: center;
  &:hover {
    background: ${lighten(0.05, "#9be7ff")};
  }
`;

Square.propTypes = {
  setGameState: propTypes.func.isRequired,
  isXTurn: propTypes.bool.isRequired,
  position: propTypes.number.isRequired,
  gameState: propTypes.array.isRequired,
  setTurn: propTypes.func.isRequired
};
