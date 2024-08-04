const Item = ({ data }) => {
  const { type, title, nominal } = data;

  return (
    <div
      className={`${
        type == "income" ? "bg-blue" : "bg-red"
      } flex justify-between gap-2 px-2 py-3 rounded text-sm`}
    >
      <p className="truncate">{title}</p>
      <p>{(type == "income" ? "+" : "-") + nominal}</p>
    </div>
  );
};

export default Item;
