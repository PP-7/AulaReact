import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";
import Historia from "./paginas/Historia";
import Elenco from "./paginas/Elenco";
import Estadio from "./paginas/Estadio";
import Torcida from "./paginas/Torcida";


import "./App.css";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/HI" element={<Historia/>}/>
                <Route path="/EL" element={<Elenco />}/>
                <Route path="/ES" element={<Estadio/>}/>
                <Route path="/TO" element={<Torcida/>}/>
            </Routes>
        </BrowserRouter>
    );
}