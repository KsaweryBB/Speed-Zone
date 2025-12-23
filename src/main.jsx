import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Suzuki from './pages/Suzuki/suzuki.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from './pages/NewsPage.jsx/NewsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <main>
        <Routes>  
          <Route path='/' element={<App />}></Route>
          <Route path='/suzuki' element={<Suzuki />}></Route>
          <Route path='/news/:id' element={<NewsPage />}></Route>
        </Routes>
      </main>

    </BrowserRouter>
  </StrictMode>,
)
