import { useEffect, useState } from "react";
import { pedirDatos } from "../../Funciones/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  console.log(catId);

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
