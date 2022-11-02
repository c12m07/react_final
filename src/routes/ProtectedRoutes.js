import { useContext } from 'react';
import { Outlet } from 'react-router';
import Login from '../components/login/index.js';
import LoginContext from '../context/LoginContext';

function ProtectedRoutes() {
  const context = useContext(LoginContext);
  const authLogin = context.logged[0];

  return authLogin ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;