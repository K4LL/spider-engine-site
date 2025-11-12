import './App.css'

import { MainSection } from './components/MainSection'
import { SupportUsSection } from './components/SupportUsSection'
import { FunFactsSection } from './components/FunFactsSection'
import { FooterSection } from "./components/Footer"

function App() {
  return (
    <>
      <MainSection></MainSection>
      <SupportUsSection></SupportUsSection>
      <FunFactsSection></FunFactsSection>
      <FooterSection></FooterSection>
    </>
  )
}

export default App