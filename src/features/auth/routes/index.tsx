import { Route, Routes } from 'react-router-dom';
import {
  FORGOT_PASSWORD_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE
} from '../../../constants';
import { Login } from './Login';
import { Register } from './Register';
import { ForgotPassword } from './ForgotPassword';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={REGISTER_PAGE} element={<Register />} />
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path={FORGOT_PASSWORD_PAGE} element={<ForgotPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
