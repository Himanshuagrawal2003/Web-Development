import { useState } from "react";

export default function LudoBoard() {
  let [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMove((prevMove) => {
      return { ...prevMove, blue: prevMove.blue + 1 };
    });
  };
  let updateYellow = () => {
    setMove((prevMove) => {
      return { ...prevMove, yellow: prevMove.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMove((prevMove) => {
      return { ...prevMove, green: prevMove.green + 1 };
    });
  };
  let updateRed = () => {
    setMove((prevMove) => {
      return { ...prevMove, red: prevMove.red + 1 };
    });
  };

  return (
    <div>
      <h3>Game Begin!</h3>
      <div>
        <p>Move Blue = {move.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Move Yellow = {move.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "Black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Move Green = {move.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Move Red = {move.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
