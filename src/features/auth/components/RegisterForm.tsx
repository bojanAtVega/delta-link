import { useTranslation } from 'react-i18next';

export interface IRegisterFormProps {}

export default function RegisterForm(props: IRegisterFormProps) {
  const { t } = useTranslation();

  return <div>{t('general.loggedOut')}</div>;
}
