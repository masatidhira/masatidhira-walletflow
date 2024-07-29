import moment from "moment";

function App() {
  const today = moment().format("DD MMM YYYY");

  return (
    <div className="w-full max-w-2xl min-h-screen mx-auto p-4 flex flex-col font-monospace">
      <header className="flex justify-between bg-darker mb-3 px-3 py-2 rounded">
        <p className="text-sm font-bold md:text-lg">WALLET-FLOW</p>
        <button className="text-sm">LOGOUT</button>
      </header>

      <div className="flex bg-darker mb-3 p-3 rounded">
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
        <div className="flex flex-col bg-darker gap-2 mb-3 p-3 rounded">
          <div className="bg-red flex justify-between gap-2 px-2 py-3 rounded text-sm">
            <p className="truncate">electricity token payments</p>
            <p>-50,000</p>
          </div>
          <div className="bg-blue flex justify-between gap-2 px-2 py-3 rounded text-sm">
            <p className="truncate">allowance from mom</p>
            <p>+100,000</p>
          </div>
          <div className="bg-blue flex justify-between gap-2 px-2 py-3 rounded text-sm">
            <p className="truncate">allowance from father and many more</p>
            <p>+100,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
