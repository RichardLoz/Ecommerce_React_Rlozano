import { useEffect, useState } from "react";
import { pedirDatos } from "../../Funciones/pedirDatos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err``);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <h2>Cargando....</h2> : <ItemList productos={productos} />}</>
  );
};
