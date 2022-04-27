import React, { useState } from "react";

export const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleSuma = () => {
    setCount(count + 1);
  };

  const handleResta = () => {
    setCount(count - 1);
  };

  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text=3xl text-2xl font-bold title-font mb">
          Boton de compra
        </h1>
        <div>
          <div>
            <button onClick={handleResta} className="btn-primary">
              -
            </button>
            <span className="font-bold"> {count} </span>
            <button onClick={handleSuma} className="btn-primary">
              +
            </button>
          </div>
          <div>
            <button className="mt-2 btn-success">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
