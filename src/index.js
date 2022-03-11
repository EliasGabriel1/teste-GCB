import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './pages/paginacadastro';
import Page2 from './pages/landingpage';
import Reset from './generic/Reset';
import Base from "./styles/elements/Base";
import {BrowserRouter,Routes,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/Cadastro" element={<Page1 />} />
        <Route path="/" element={<Page2 />} />
      </Routes>
      <Base/>
      <Reset />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
