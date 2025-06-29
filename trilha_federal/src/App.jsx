import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CEFET from "./pages/Pages_inter/Tecnicos_inter/CEFET/CEFET";
import UniversidadesInter from "./pages/Pages_inter/Universidades_inter/Universidades_inter";
import TecnicosInter from "./pages/Pages_inter/Tecnicos_inter/Tecnicos_inter";
import InstitutosInter from "./pages/Pages_inter/Institutos_inter/Institutos_inter";
import TeamPage from "./pages/Pages_aux/Team_page";
import ContactPage from "./pages/Pages_aux/Contact_page";

// Importando todas as páginas de universidades
import UFMG from "./pages/Universidades/UFMG";
import UFU from "./pages/Universidades/UFU";
import UFV from "./pages/Universidades/UFV";
import USP from "./pages/Universidades/USP";
import UNICAMP from "./pages/Universidades/UNICAMP";
import UNESP from "./pages/Universidades/UNESP";
import UFRJ from "./pages/Universidades/UFRJ";
import UFF from "./pages/Universidades/UFF";
import UFRRJ from "./pages/Universidades/UFRRJ";
import UFES from "./pages/Universidades/UFES";
import UERJ from "./pages/Universidades/UERJ";
import UEMG from "./pages/Universidades/UEMG";
import UFJF from "./pages/Universidades/UFJF";
import UFOP from "./pages/Universidades/UFOP";
import UFVJM from "./pages/Universidades/UFVJM";
import UNIFALMG from "./pages/Universidades/UNIFAL-MG";
import UNIFESP from "./pages/Universidades/UNIFESP";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/quem-somos" element={<TeamPage />} />
            <Route path="/universidades" element={<UniversidadesInter />} />
            <Route path="/tecnicos" element={<TecnicosInter />} />
            <Route path="/institutos" element={<InstitutosInter />} />

            {/* Rotas das Universidades */}
            <Route path="/universidade/ufmg" element={<UFMG />} />
            <Route path="/universidade/ufu" element={<UFU />} />
            <Route path="/universidade/ufv" element={<UFV />} />
            <Route path="/universidade/usp" element={<USP />} />
            <Route path="/universidade/unicamp" element={<UNICAMP />} />
            <Route path="/universidade/unesp" element={<UNESP />} />
            <Route path="/universidade/ufrj" element={<UFRJ />} />
            <Route path="/universidade/uff" element={<UFF />} />
            <Route path="/universidade/ufrrj" element={<UFRRJ />} />
            <Route path="/universidade/ufes" element={<UFES />} />
            <Route path="/universidade/uerj" element={<UERJ />} />
            <Route path="/universidade/uemg" element={<UEMG />} />
            <Route path="/universidade/ufjf" element={<UFJF />} />
            <Route path="/universidade/ufop" element={<UFOP />} />
            <Route path="/universidade/ufvjm" element={<UFVJM />} />
            <Route path="/universidade/unifal-mg" element={<UNIFALMG />} />
            <Route path="/universidade/unifesp" element={<UNIFESP />} />

            {/* Rotas dos Técnicos */}
            <Route path="/institution/cefet" element={<CEFET />} />

            <Route path="/contato" element={<ContactPage />} />

            {/* Rotas temporárias para instituições sem páginas específicas */}
            <Route
              path="/institution/ifmg"
              element={
                <div className="coming-soon">
                  Página do IFMG em desenvolvimento
                </div>
              }
            />
            <Route
              path="/institution/ifrj"
              element={
                <div className="coming-soon">
                  Página do IFRJ em desenvolvimento
                </div>
              }
            />
            <Route
              path="/institution/ifsc"
              element={
                <div className="coming-soon">
                  Página do IFSC em desenvolvimento
                </div>
              }
            />
            <Route
              path="/institution/ifb"
              element={
                <div className="coming-soon">
                  Página do IFB em desenvolvimento
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
