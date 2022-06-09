import { async } from "@firebase/util";
import {
  collection,
  writeBatch,
  addDoc,
  Timestamp,
  query,
  documentId,
  getDocs,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

export const CheckOut = () => {
  const { cart, totalCart, vaciarCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const generarOrdern = async () => {
    const orden = {
      comprador: values,
      items: cart,
      total: totalCart(),
      fyh: Timestamp.fromDate(new Date()),
    };

    /* TODO: 1- Enviar referencia a Firebase */
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");

    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((el) => el.id)
      )
    );
    const productos = await getDocs(q);
    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const item = cart.find((el) => el.id === doc.id);

      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, { stock: doc.data().stock - item.cantidad });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        vaciarCart();
      });
    } else {
      alert("Hay item sin stock");
    }
  };

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 5) {
      alert("El nombre es demasiado corto");
      return;
    }

    if (values.email.length < 5) {
      alert("Ingrese un correo valido");
      return;
    }

    if (values.tel.length < 5) {
      alert("El telefono es invalido");
      return;
    }

    generarOrdern();
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Gracias por tu compra</h2>
        <hr />
        <h3>Tu numero de orden es: {orderId}</h3>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>ChechOut</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Ingrese su nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />

        <input
          className="form-control my-2"
          type="email"
          placeholder="Ingrese su email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />

        <input
          className="form-control my-2"
          type="tel"
          placeholder="Ingrese su celular"
          value={values.tel}
          onChange={handleInputChange}
          name="tel"
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
