// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AuthContext from './context/auth-context';

import Header from './layouts/header/Index';
import MainLayout from './layouts/mainLayout/Index';
import Login from './pages/login/Index';
import Register from './pages/register/Index';
import Dashboard from './pages/dashboard/Index';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <MainLayout >
      {!authCtx.isLoggedIn && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      )}
      {authCtx.isLoggedIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      )}
    </MainLayout>
  );
}

export default App;
