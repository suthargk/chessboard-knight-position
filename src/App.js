import "./App.css";
import ChessBoard from "./components/ChessBoard";

const horizontal = 8;
const vertical = 8;
const CHESS_SIZE = horizontal * vertical;

function App({ onReset }) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-50">
      <div className="my-10 text-center">
        <h1 className="primary-heading bg-gradient-to-r bg-clip-text from-cyan-500 to-blue-500 tracking-wider text-5xl lg:text-6xl font-bold">
          Chess Board!
        </h1>
        <h3 className="text-lg lg:text-2xl ">
          Select knight to find all possible position
        </h3>
      </div>
      <ChessBoard size={CHESS_SIZE} onReset={onReset}/>
      
    </div>
  );
}

export default App;
