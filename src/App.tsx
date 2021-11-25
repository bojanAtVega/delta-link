import Router from './components/Router';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  const changeLocale = (locale: string) => i18n.changeLanguage(locale);

  return (
    <>
      <ul>
        <li onClick={() => changeLocale('en')}>en</li>
        <li onClick={() => changeLocale('de')}>de</li>
        <li onClick={() => changeLocale('es')}>es</li>
        <li onClick={() => changeLocale('fr')}>fr</li>
      </ul>
      <Router />
    </>
  );
}
