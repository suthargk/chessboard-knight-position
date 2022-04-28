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

const ChessBoard = ({ size,  onReset, }) => {
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
      <div className="my-5 w-full text-center lg:w-auto">
        <button type="button" onClick={onReset} className="w-full lg:w-auto px-4 py-2 lg:px-16 text-lg transition duration-300 hover:bg-sky-500 hover:border-sky-600 border border-gray-50 rounded focus:outline focus:outline-4 focus:border-0 focus:outline-sky-600">Reset</button>
      </div>
    </div>
  );
};

export default ChessBoard;
