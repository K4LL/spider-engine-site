import './App.css'

import { MainSection } from './components/MainSection'
import { SupportUsSection } from './components/SupportUsSection'
import { FunFactsSection } from './components/FunFactsSection'
import { FooterSection } from "./components/Footer"
import { Devlog } from "./Devlog"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <MainSection />
      <SupportUsSection />
      <FunFactsSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/spider-engine-site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;