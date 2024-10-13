import React from 'react'
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";


function Transactioncompo({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
  return (

    <li className={transaction.amount  < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransaction(transaction.id) } className="delete-btn">x</button>
        </li>

  )
}

export default Transactioncompo