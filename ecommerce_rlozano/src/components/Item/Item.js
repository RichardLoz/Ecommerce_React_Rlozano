import { Link } from "react-router-dom";
import { BsStarFill, BsCartCheck } from "react-icons/bs";

export const Item = ({ nombre, precio, img, desc, id, categoria }) => {
  return (
    /*     <Card style={{ width: "18rem", margin: "16px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Precio: ${precio}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card> */
    <div>
      <div className="pro">
        <img src={img} />
        <div className="des">
          <span>{categoria}</span>
          <h5>{nombre}</h5>
          <div className="star">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <h4>${precio}</h4>
        </div>
        <div className="cart">
          <Link to={`/detail/${id}`}>
            <BsCartCheck />
          </Link>
        </div>
      </div>
    </div>
  );
};
