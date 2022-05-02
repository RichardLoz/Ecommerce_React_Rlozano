import React, { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleResta = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      alert("No hay stock disponible");
    }
  };

  const handleOnAdd = () => {
    alert("Agregado al carrito");
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
            <span className="font-bold"> {count}</span>
            <button onClick={handleSuma} className="btn-primary">
              +
            </button>
          </div>
          <div>
            <button onClick={handleOnAdd} className="mt-2 btn-success">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
