import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  img,
  desc,
  stock,
  categoria,
}) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <img src="{img} alt={nombre}" />
      <p>{desc}</p>
      <h5>Precio: ${precio}</h5>
      {<ItemCount stock={2} initial={0} />}
    </div>
  );
};
