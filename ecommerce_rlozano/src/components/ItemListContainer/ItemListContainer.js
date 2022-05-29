import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    /* TODO: 1- Armar referencia */
    const productosRef = collection(db, "productos");
    const q = catId
      ? query(productosRef, where("categoria", "==", catId))
      : productosRef;

    /* TODO: 2- Pedir esa referencia */
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <>{loading ? <h2>Cargando....</h2> : <ItemList productos={productos} />}</>
  );

  /* TODO: Sintaxis Early Return */
  /* if (loading) {
    return <h2>Cargando....</h2>;
  }

  return <ItemList productos={productos} />; */
};
