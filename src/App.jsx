import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UniversidadesInter from "./pages/Pages_inter/Universidades_inter/Universidades_inter";
import TecnicosInter from "./pages/Pages_inter/Tecnicos_inter/Tecnicos_inter";
import InstitutosInter from "./pages/Pages_inter/Institutos_inter/Institutos_inter";
import TeamPage from "./pages/Pages_aux/Team_page";
import Internacional from "./pages/Pages_aux/Internacional";
import ContactPage from "./pages/Pages_aux/Contact_page";
import LoginPage from "./pages/Login_page/login/Login-page";
import RegisterPage from "./pages/Login_page/register/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";

// Importando todas as páginas de universidades
import UFMG from "./pages/Pages_inter/Universidades_inter/Universidades/UFMG";
import UFU from "./pages/Pages_inter/Universidades_inter/Universidades/UFU";
import UFV from "./pages/Pages_inter/Universidades_inter/Universidades/UFV";
import USP from "./pages/Pages_inter/Universidades_inter/Universidades/USP";
import UNICAMP from "./pages/Pages_inter/Universidades_inter/Universidades/UNICAMP";
import UNESP from "./pages/Pages_inter/Universidades_inter/Universidades/UNESP";
import UFRJ from "./pages/Pages_inter/Universidades_inter/Universidades/UFRJ";
import UFF from "./pages/Pages_inter/Universidades_inter/Universidades/UFF";
import UFRRJ from "./pages/Pages_inter/Universidades_inter/Universidades/UFRRJ";
import UFES from "./pages/Pages_inter/Universidades_inter/Universidades/UFES";
import UERJ from "./pages/Pages_inter/Universidades_inter/Universidades/UERJ";
import UEMG from "./pages/Pages_inter/Universidades_inter/Universidades/UEMG";
import UFJF from "./pages/Pages_inter/Universidades_inter/Universidades/UFJF";
import UFOP from "./pages/Pages_inter/Universidades_inter/Universidades/UFOP";
import UFVJM from "./pages/Pages_inter/Universidades_inter/Universidades/UFVJM";
import UNIFALMG from "./pages/Pages_inter/Universidades_inter/Universidades/UNIFAL-MG";
import UNIFESP from "./pages/Pages_inter/Universidades_inter/Universidades/UNIFESP";

// Importando todas as páginas de institutos
import IFMG from "./pages/Pages_inter/Institutos_inter/Institutos/IFMG";
import IFRJ from "./pages/Pages_inter/Institutos_inter/Institutos/IFRJ";
import IFES from "./pages/Pages_inter/Institutos_inter/Institutos/IFES";
import IFSP from "./pages/Pages_inter/Institutos_inter/Institutos/IFSP";
import IFNMG from "./pages/Pages_inter/Institutos_inter/Institutos/IFNMG";
import IFTM from "./pages/Pages_inter/Institutos_inter/Institutos/IFTM";
import IFF from "./pages/Pages_inter/Institutos_inter/Institutos/IFF";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CEFETMG from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/CEFET-MG";
import CEFETRJ from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/CEFET-RJ";
import COLTEC from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/COLTEC";
import COLUNI from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/COLUNI";
import PEDROII from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/PEDROII";
import ETECGV from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/ETEC-GV";
import ETECSJC from "./pages/Pages_inter/Tecnicos_inter/Tecnicos/ETEC-SJC";
import NotificacoesEmConstrucao from "./pages/pages_tools/NotificacoesEmConstrucao";
import EstatisticasEmConstrucao from "./pages/pages_tools/EstatisticasEmConstrucao";
import ComunidadeEmConstrucao from "./pages/pages_tools/ComunidadeEmConstrucao";
import SimuladosEmConstrucao from "./pages/pages_tools/SimuladosEmConstrucao";
import GuiaEstudosEmConstrucao from "./pages/pages_tools/GuiaEstudosEmConstrucao";
import CalendarioEmConstrucao from "./pages/pages_tools/CalendarioEmConstrucao";
import { ToastProvider } from "./GlobalToast";

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Página de login sem Header e Footer */}
            <Route path="/login" element={<LoginPage />} />
            {/* Página de cadastro sem Header e Footer */}
            <Route path="/cadastro" element={<RegisterPage />} />
            {/* Dashboard pós-login */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Todas as outras páginas com Header e Footer */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<MainContent />} />
                      <Route path="/quem-somos" element={<TeamPage />} />
                      <Route
                        path="/universidades"
                        element={<UniversidadesInter />}
                      />
                      <Route path="/tecnicos" element={<TecnicosInter />} />
                      <Route path="/institutos" element={<InstitutosInter />} />

                      {/* Rotas das Universidades */}
                      <Route path="/universidade/ufmg" element={<UFMG />} />
                      <Route path="/universidade/ufu" element={<UFU />} />
                      <Route path="/universidade/ufv" element={<UFV />} />
                      <Route path="/universidade/usp" element={<USP />} />
                      <Route
                        path="/universidade/unicamp"
                        element={<UNICAMP />}
                      />
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
                      <Route
                        path="/universidade/unifal-mg"
                        element={<UNIFALMG />}
                      />
                      <Route
                        path="/universidade/unifesp"
                        element={<UNIFESP />}
                      />

                      {/* Rotas dos Institutos */}
                      <Route path="/instituto/ifmg" element={<IFMG />} />
                      <Route path="/instituto/ifrj" element={<IFRJ />} />
                      <Route path="/instituto/ifes" element={<IFES />} />
                      <Route path="/instituto/ifsp" element={<IFSP />} />
                      <Route path="/instituto/ifnmg" element={<IFNMG />} />
                      <Route path="/instituto/iftm" element={<IFTM />} />
                      <Route path="/instituto/iff" element={<IFF />} />

                      {/* Rotas dos Técnicos */}
                      <Route path="/tecnico/cefet-mg" element={<CEFETMG />} />
                      <Route path="/tecnico/cefet-rj" element={<CEFETRJ />} />
                      <Route path="/tecnico/coltec" element={<COLTEC />} />
                      <Route path="/tecnico/coluni" element={<COLUNI />} />
                      <Route path="/tecnico/pedroii" element={<PEDROII />} />
                      <Route path="/tecnico/etec-gv" element={<ETECGV />} />
                      <Route path="/tecnico/etec-sjc" element={<ETECSJC />} />

                      {/* Rotas temporárias para instituições sem páginas específicas */}
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

                      <Route
                        path="/calendario"
                        element={<CalendarioEmConstrucao />}
                      />
                      <Route
                        path="/guia-estudos"
                        element={<GuiaEstudosEmConstrucao />}
                      />
                      <Route
                        path="/simulados"
                        element={<SimuladosEmConstrucao />}
                      />
                      <Route
                        path="/comunidade"
                        element={<ComunidadeEmConstrucao />}
                      />
                      <Route
                        path="/estatisticas"
                        element={<EstatisticasEmConstrucao />}
                      />
                      <Route
                        path="/notificacoes"
                        element={<NotificacoesEmConstrucao />}
                      />
                      <Route
                        path="/internacional"
                        element={<Internacional />}
                      />
                      <Route path="/contato" element={<ContactPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
