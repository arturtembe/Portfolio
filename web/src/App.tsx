import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/page";
import { Home } from "./pages/Home/page";
import { Habilidade } from "./pages/Habilidade/page";
import { Projecto } from "./pages/Projecto/page";
import { Contacto } from "./pages/Contacto";
import { HabilidadeSlug } from "./pages/Habilidade/Slug/pages";
import { ProjectoSlug } from "./pages/Projecto/Slug/pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidade" element={<Habilidade />} />
        <Route path="/habilidade/:slug" element={<HabilidadeSlug />} />
        <Route path="/projecto" element={<Projecto />} />
        <Route path="/projecto/:slug" element={<ProjectoSlug />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
