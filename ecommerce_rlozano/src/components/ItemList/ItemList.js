import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <section id="product1" className="section-p1">
      <h2>Nuestras categorias</h2>
      <p>Productos de primera calidad</p>
      <div className="pro-container">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};
