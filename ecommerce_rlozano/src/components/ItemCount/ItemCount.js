export const ItemCount = ({ stock, min = 0, counter, setCounter }) => {
  const handleSuma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleResta = () => {
    if (counter > min) {
      setCounter(counter - 1);
    } else {
      alert("Compra minima de un producto");
    }
  };

  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text=3xl text-2xl font-bold title-font mb">
          {/*      Boton de compra */}
        </h1>
        <div>
          <div>
            <button onClick={handleResta} className="btn-primary">
              -
            </button>
            <span className="font-bold"> {counter}</span>
            <button onClick={handleSuma} className="btn-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
