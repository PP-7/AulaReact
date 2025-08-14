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

import Acre from "./Paginas/Acre";
import Amapá from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Pará from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";
import Amapa from "./Paginas/Amapa";
import Para from "./Paginas/Para";

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

                <Route path="/ac" element={<Acre/>}/>
                <Route path="/am" element={<Amapá/>}/>
                <Route path="/az" element={<Amazonas/>}/>
                <Route path="/pa" element={<Para/>}/>
                <Route path="/ro" element={<Rondonia/>}/>
                <Route path="/rr" element={<Roraima/>}/>
                <Route path="/to" element={<Tocantins/>}/>
            </Routes>
        </BrowserRouter>
    );
}