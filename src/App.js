// import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./modulos/NavBar/navbar";
import Cardapio from './ESTUDOS/PROPS/AULA02/aula02';
import TabelaComplexa from './modulos/Tabela/tabela';
import AppAula02 from './ESTUDOS/PROPS/AULA02/aula02';
import Memoria from './modulos/Memorias/Memorias';

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Navbar/>
    //     <Route path="/" element={ <TabelaComplexa/> } />
    //   </Routes>
    // </BrowserRouter>
    
    <app-main>
      <Memoria/>
    </app-main> 
  );
}

export default App; 
