import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "../src/styles/styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Sky-Importaciones" />
      <ItemCount />
    </>
  );
}

export default App;
