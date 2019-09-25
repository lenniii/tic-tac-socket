import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Square from "../components/square/square";

const Game = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameBoardState, setGameBoardState] = useState(Array(9).fill(null));

  const renderGameSquare = position => {
    return (
      <Square
        gameState={gameBoardState}
        position={position}
        setGameState={setGameBoardState}
        setTurn={setIsXTurn}
        isXTurn={isXTurn}
      />
    );
  };

  return (
    <div>
      <Table>
        <tbody>
          <Row>
            {renderGameSquare(0)}
            {renderGameSquare(1)}
            {renderGameSquare(2)}
          </Row>
          <Row>
            {renderGameSquare(3)}
            {renderGameSquare(4)}
            {renderGameSquare(5)}
          </Row>
          <Row>
            {renderGameSquare(6)}
            {renderGameSquare(7)}
            {renderGameSquare(8)}
          </Row>
        </tbody>
      </Table>
    </div>
  );
};

export default Game;

const Row = styled.tr`
  border: 1px solid black;
`;

const Table = styled.table`
  background: #9be7ff;
  width: 800px;
  height: 800px;
  border-collapse: separate;
  border-spacing: 5px;
`;
