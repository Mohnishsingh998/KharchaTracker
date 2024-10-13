import { useState } from 'react'
import Header from './componeents/headers'
import Balance from './componeents/balance'
import Transaction from './componeents/Transaction'
import TransactionList from './componeents/TransactionList'
import IncomeExpense from './componeents/IncomeExpense'
import { GlobalProvider } from './context/GlobalState'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
     <Header/> 
     <div className="container">
     <Balance/> 
     <IncomeExpense/> 
     <TransactionList/>
     <Transaction/>
     </div>
    </GlobalProvider>
  )
}

export default App
