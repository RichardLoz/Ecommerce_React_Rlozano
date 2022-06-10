import { Link } from "react-router-dom";
import { BsStarFill, BsCartCheck } from "react-icons/bs";

export const Item = ({ nombre, precio, img, desc, id, categoria }) => {
  return (
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
