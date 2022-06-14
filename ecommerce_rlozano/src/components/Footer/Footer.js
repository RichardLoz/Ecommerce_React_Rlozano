import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.4786100219153!2d-58.48925398423837!3d-34.54143546171348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6c76c7f96ad%3A0xa7da22e9b56a80e8!2sArist%C3%B3bulo%20del%20Valle%202344%2C%20B1602%20Florida%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1649128716836!5m2!1ses-419!2sar"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </section>
      <footer class="site-footer">
        <div class="container">
          <div class="row mb-2">
            <div class="col-md-3 mb-2">
              <h2>Sky</h2>
              <p>
                Empresa dedicada a importar productos desde el exterior.
                Contamos con servicio Maritimo, Aereo y puerta a puerta. <br />
                Seguimiento en tiempo real de su producto desde el momento en
                que lo compras.
              </p>
            </div>

            <div class="col-md-3 mb-5">
              <h2>Contacto</h2>
              <ul class="list-unstyled footer-link">
                <li class="d-flex">
                  <span class="me-3">Direccion:</span>
                  <span class="text-white">Aristobulo del Valle 2344</span>
                </li>
                <li class="d-flex">
                  <span class="me-3">Telefono:</span>
                  <span class="text-white">1158172441</span>
                </li>
                <li class="d-flex">
                  <span class="me-3">Email:</span>
                  <span class="text-white">ventas@skyimportaciones.com</span>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-5">
              <h2>Categorias</h2>
              <ul class="list-unstyled footer-link">
                <li>
                  <a href="#">Hogar</a>
                </li>
                <li>
                  <a href="#">Tecnologia</a>
                </li>
                <li>
                  <a href="#">Ropa</a>
                </li>
                <li>
                  <a href="#">Zapatos</a>
                </li>
                <li>
                  <a href="#">Salud</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <h2>Redes Sociales</h2>
              <ul class="list-unstyled footer-link d-flex footer-social">
                <li>
                  <a href="">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsPinterest />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-12 text-md-center">
              <p>
                Esta pagina fue creada por Ricardo Lozano
                <i class="bx bxs-shopping-bag"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
