import React from "react";
import { useState , useCallback , useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction() {

    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState(0);

    const  { AddTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000), //genrate random number
            text: Text,
            amount: +Amount
            }
            AddTransaction(newTransaction);
        }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}


export default Transaction;
