import moment from "moment";
import Item from "./components/Item";
import { useState, useEffect } from "react";

const App = () => {
  const userEmail = "masatidhira@test.com";
  const [transactions, setTransactions] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5050/transactions/${userEmail}`
      );
      const json = await response.json();
      setTransactions(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getData, []);

  transactions?.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(transactions);

  const today = moment().format("DD MMM YYYY");

  return (
    <div className="w-full max-w-2xl min-h-screen mx-auto p-4 flex flex-col font-monospace">
      <header className="card justify-between py-2">
        <p className="text-sm font-bold md:text-lg">WALLET-FLOW</p>
        <button className="text-sm">LOGOUT</button>
      </header>

      <div className="card">
        <div className="w-1/4 aspect-square mr-3 bg-dark rounded"></div>
        <div className="flex-1 flex flex-col">
          <h1 className="flex-1 text-base md:text-lg ">Welcome [username]</h1>
          <div className="flex flex-col justify-between text-sm md:flex-row">
            <p>cash: 150,000</p>
            <p>today's expenses: 50,000</p>
          </div>
        </div>
      </div>

      <div>
        <p className="flex justify-between text-xs mb-1 px-1">
          <span>Today</span>
          <span>{today}</span>
        </p>
        <div className="card flex-col gap-2">
          {transactions?.map((item, index) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
