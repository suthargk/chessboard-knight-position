import React from "react";
import ChessBoardColumn from "./ChessBoardColumn";

const ChessBoardRow = ({
  indexRow,
  position,
  handleOnClick,
 
}) => {
  const cols = Array(8).fill(0)
  return (
    <div>
      {cols.map((col, indexCol) => (
        <ChessBoardColumn
          key={indexCol}
          col={indexCol}
          row={indexRow}
          position={position}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  );
};

export default ChessBoardRow;
