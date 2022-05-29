import { configBtns } from "../../Funciones/configBtns";

export const ItemCount = ({ stock, min = 0, counter, setCounter }) => {
  const handleSuma = (e) => {
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

  const { configRestar, configSumar } = configBtns(
    counter,
    stock,
    min,
    handleResta,
    handleSuma
  );

  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text=3xl text-2xl font-bold title-font mb">
          {/*      Boton de compra */}
        </h1>
        <div>
          <div>
            <button {...configRestar}> - </button>
            <span className="font-bold"> {counter}</span>
            <button {...configSumar}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
