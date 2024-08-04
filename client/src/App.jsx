import moment from "moment";
import Item from "./components/Item";

const App = () => {
  const today = moment().format("DD MMM YYYY");

  const ListOfItem = [
    {
      title: "allowance from father and many more",
      nominal: "100,000",
      type: "income",
    },
    { title: "allowance from mom", nominal: "100,000", type: "income" },
    {
      title: "electricity token payments",
      nominal: "50,000",
      type: "expense",
    },
  ];

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
          {ListOfItem.map((item, index) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
