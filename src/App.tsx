import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import WhatsAppFloat from "./components/layout/WhatsAppFloat"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PrinterPage from "./pages/PrinterPage"
import AssetsPage from "./pages/AssetsPage"


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavBar />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/printer" element={<PrinterPage />} />
          <Route path="/assets" element={<AssetsPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
