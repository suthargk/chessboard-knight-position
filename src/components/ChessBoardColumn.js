import React from "react";

const handlPositionCondition = (position, row, col) => {
  if (
    (position?.upward_left_first?.row === row &&
      position?.upward_left_first?.col === col) ||
    (position?.upward_right_first?.row === row &&
      position?.upward_right_first?.col === col) ||
    (position?.upward_left_last?.row === row &&
      position?.upward_left_last?.col === col) ||
    (position?.upward_right_last?.row === row &&
      position?.upward_right_last?.col === col) ||

    (position?.downward_left_first?.row === row &&
      position?.downward_left_first?.col === col) ||
    (position?.downward_right_first?.row === row &&
      position?.downward_right_first?.col === col) ||
    (position?.downward_left_last?.row === row &&
      position?.downward_left_last?.col === col) ||
    (position?.downward_right_last?.row === row &&
      position?.downward_right_last?.col === col)
  ) {
    return true;
  }
  return false
};

const ChessBoardColumn = ({ col, row, position, handleOnClick }) => {
  return (
    <div
      className="lg:h-20 lg:w-20 h-11 w-11 md:h-16 md:w-16 square cursor-pointer border border-gray-50"
      data-knight={
        position?.selectedKnightPosition?.col === col &&
        position?.selectedKnightPosition?.row === row
      }
      data-active={handlPositionCondition(position, row, col)}
      data-color={(row + col) % 2 !== 0 ? true: false}
      onClick={() => console.log(row, col) || handleOnClick(row, col)}
    >
      <span className="row"></span>
      <span className="col"></span>
    </div>
  );
};

export default ChessBoardColumn;
