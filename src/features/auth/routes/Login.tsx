import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('auth.login.header')}</h1>
      <LoginForm />
    </Layout>
  );
};
