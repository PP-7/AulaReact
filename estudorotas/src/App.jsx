import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";

import "./App.css";

import  Parana from "./Paginas/parana";
import  SantaCatarina from "./Paginas/SantaCataria";
import  RioGrandeSul from "./Paginas/RioGrandeSul";

import  MatoGrossoSul from "./Paginas/MatogrossoSul";
import  MatoGrosso from "./Paginas/MatoGrosso";
import  DistritoFederal from "./Paginas/DistritoFederal";
import  Goias from "./Paginas/Goias";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sp" element={<SaoPaulo />} />
                <Route path="/rj" element={<RioJaneiro />} />
                <Route path="/mg" element={<MinasGerais />} />
                <Route path="/es" element={<EspiritoSanto />} />

                <Route path="/pr" element={<Parana/>}/>
                <Route path="/sc" element={<SantaCatarina/>}/>
                <Route path="/rs" element={<RioGrandeSul/>}/>

                <Route path="/ms" element={<MatoGrossoSul/>}/>
                <Route path="/mt" element={<MatoGrosso/>}/>
                <Route path="/df" element={<DistritoFederal/>}/>
                <Route path="/go" element={<Goias/>}/>
            </Routes>
        </BrowserRouter>
    );
}