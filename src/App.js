import "./App.css";
import ChessBoard from "./components/ChessBoard";

const horizontal = 8;
const vertical = 8;
const CHESS_SIZE = horizontal * vertical;

function App({ onReset }) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-50 p-2">
      <div className="my-10 text-center">
        <h1 className="primary-heading bg-gradient-to-r bg-clip-text from-cyan-500 to-blue-500 tracking-wider text-5xl lg:text-6xl font-bold">
          Chess Board!
        </h1>
        <h3 className="text-lg lg:text-2xl ">
          Select knight to find all possible position
        </h3>
      </div>
      <ChessBoard size={CHESS_SIZE} />
      <div className="my-5 w-full lg:w-auto p-1">
        <button type="button" onClick={onReset} className="w-full lg:w-auto px-4 py-2 lg:px-16 text-lg transition duration-300 hover:bg-sky-500 hover:border-sky-600 border border-gray-50 rounded focus:outline focus:outline-4 focus:border-0 focus:outline-sky-600">Reset</button>
      </div>
    </div>
  );
}

export default App;
