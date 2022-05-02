import { useEffect, useState } from "react";
import { pedirDatos } from "../../Funciones/pedirDatos";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err``);
      })
      .finally(() => {
        console.log("Fin del proceso");
      });
  }, []);

  return (
    <section className="item-list-container">
      <div className="row mb-2">
        {productos.map((el) => (
          <Item
            key={el.id}
            nombre={el.nombre}
            precio={el.precio}
            img={el.img}
            desc={el.desc}
          />
        ))}
      </div>
    </section>
  );
};
