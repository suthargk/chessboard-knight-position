import React, { useReducer } from "react";
import ChessBoardRow from "./ChessBoardRow";

const positionReducer = (state, action) => {
  switch (action.type) {
    case "KNIGHT_POSITION":
      return {
        ...state,
        selectedKnightPosition: {
          row: action.payload.row,
          col: action.payload.col,
        },
      };
    case "STEP_ONE":
      return ({
        ...state,
        upward_left_first: {row: action.payload.row - 1  , col: action.payload.col - 2},
        upward_right_first: {row: action.payload.row - 1, col: action.payload.col + 2},
        downward_left_first: {row: action.payload.row  + 1 , col: action.payload.col - 2},
        downward_right_first: {row: action.payload.row + 1, col: action.payload.col + 2}
      })

    case "STEP_TWO":
      return {
        ...state,
        upward_left_last: {row: action.payload.row - 2, col: action.payload.col - 1},
        upward_right_last: {row: action.payload.row - 2, col: action.payload.col + 1},
        downward_left_last: {row: action.payload.row + 2, col: action.payload.col - 1},
        downward_right_last: {row: action.payload.row + 2, col: action.payload.col + 1}      
      }
    default:
      throw new Error("Not working");
  }
};

const ChessBoard = ({ size }) => {
  const rows = Array(8).fill(0);
  const [position, dispatchPosition] = useReducer(positionReducer, {
    selectedKnightPosition: { row: null, col: null },
    upper_left_first: {row: null, col: null}
  });

  
  const handleOnClick = (selectedRow, selectedCol) => {
    dispatchPosition({
      type: "KNIGHT_POSITION",
      payload: { row: selectedRow, col: selectedCol },
    });
    dispatchPosition({
      type: "STEP_ONE",
      payload: { row: selectedRow , col: selectedCol},
    });
    dispatchPosition({
      type: "STEP_TWO",
      payload: { row: selectedRow , col: selectedCol},
    });
  };

  return (
    <div>
      <div
        className="flex flex-wrap"
      >
        {rows.map((row, indexRow) => (
          <ChessBoardRow
            key={indexRow}
            indexRow={indexRow}
            position={position}
            handleOnClick={handleOnClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
