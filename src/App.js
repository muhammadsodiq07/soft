import "./App.scss";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import Routerss from "./routers/Routerss";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {

  AOS.init({
    duration: 1000,
  });
  
  return (
    <div className="App">
      <div className="app">
        {/* ================== HEADER ================== */}
        <Header />

        {/* ================== MAIN SECTIONS ================== */}
        <main className="main" id="main">
          <Routerss />
        </main>

        {/* ================== FOOTER ================== */}
        <Footer />
      </div>

      <ScrollTop />
    </div>
  );
}

export default App;
