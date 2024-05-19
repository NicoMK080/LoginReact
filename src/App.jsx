
import './App.css'
import { Compo1 } from './componentes/compo1'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from './componentes/login'
import { Pay } from './componentes/pagar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/rutaCompo1" element={<Compo1 />} />
            <Route path="rutaMarco" element={<LogIn />} />
            <Route path="*" element={<LogIn />} />
            <Route path="comprar" element={<Pay/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
