import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    /* TODO: 1- Referencia del documento */
    const docRef = doc(db, "productos", itemId);

    /* TODO: 2- Peticion del doc */
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container my-5">
      {loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </div>
  );
};
