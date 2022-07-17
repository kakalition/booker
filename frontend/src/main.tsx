import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import App from './App';
import './index.css';
import RegisterPage from './Features/Register/RegisterPage';
import LoginPage from './Features/Login/LoginPage';
import DashboardPage from './Features/Dashboard/DashboardPage';
import ManageAuthorPage from './Features/ManageEntity/Author/ManageAuthorPage';
import ManagePublisherPage from './Features/ManageEntity/Publisher/ManagePublisherPage';
import ManageBookPage from './Features/ManageEntity/Book/ManageBookPage';

axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/manage-author" element={<ManageAuthorPage />} />
          <Route path="/manage-publisher" element={<ManagePublisherPage />} />
          <Route path="/manage-book" element={<ManageBookPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
