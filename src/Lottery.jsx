import { useState } from "react";
import {getTicket, sum} from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n= 3, winningSum= 15}){
    let [ticket, setTicket] = useState(getTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let buyNewTicket = () =>{
        setTicket(getTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
       <Ticket ticket={ticket}/>
            <button onClick={buyNewTicket}>Buy New Ticket</button>
            <h3>{isWinning ? "Congratulations You Won!" : "Better Luck Next Time!"}</h3>
        </div>
    );
}