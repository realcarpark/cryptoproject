import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

import Main from './Main';

function App() {
  return (
    <BrowserRouter>
        <Routes>

            <Route index element={<Home />} />
            <Route path="main" element={<Main />} />

        </Routes>
        </BrowserRouter>
  )
}

export default App;