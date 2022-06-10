import { BsEnvelope } from "react-icons/bs";
export const Newsletter = () => {
  return (
    <div class="bg-seccion text-center" id="contacto">
      <form action="">
        <h2>Unete a nuestro Newsletter</h2>
        <p>
          Aprovecha los increibles descuentos en productos y bonificacion en
          gastos de envio que ofrecemos a nuestros suscriptores.
        </p>
        <div class="email-box">
          <i class="bx bxs-envelope">
            <BsEnvelope />
          </i>
          <input
            class="tbox"
            type="email"
            placeholder="Ingrese su correo electronico"
          />
          <button class="btn_2" type="button" name="button">
            Subscribirse
          </button>
        </div>
      </form>
    </div>
  );
};
