
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PrincipaisCursos from "./components/PrincipaisCursos/PrincipaisCursos";
import ImpactoTransformador from "./components/ImpactoTransformador/ImpactoTransformador";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import ChamadaFinal from "./components/ChamadaFinal/ChamadaFinal";
import Footer from "./components/Footer/Footer";
import CatalogoCursos from "./pages/CatalogoCursos/CatalogoCursos";
import DetalheCurso from "./pages/DetalheCurso/DetalheCurso";

function Home() {
  return (
    <>
      <Hero />
      <PrincipaisCursos />
      <ImpactoTransformador />
      <Depoimentos />
      <ChamadaFinal />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<CatalogoCursos />} />
          <Route path="/cursos/:id" element={<DetalheCurso />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
