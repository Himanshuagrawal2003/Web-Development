import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./helper";

export default function Lottery({ n = 3, winningSum = 15 }) {
  const [ticket, setTicket] = useState(genTicket(n));

  const isWinning = sum(ticket) === winningSum;

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "🎉 Congratulations, You Won!!"}</h3>
    </div>
  );
}
