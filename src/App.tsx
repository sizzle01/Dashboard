import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// @ts-ignore
import Home from './pages/home/Home'
// @ts-ignore
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
