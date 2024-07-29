function App() {
  const today = new Date().toLocaleString();

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
            <p>cash: 100.000</p>
            <p>today's expenses: 0</p>
          </div>
        </div>
      </div>
      <div>
        <p>{today}</p>
      </div>
    </div>
  );
}

export default App;
