import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from '../features/auth/routes';

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
