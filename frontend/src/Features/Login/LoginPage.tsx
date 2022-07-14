import BookerLogo from '../../Components/Logo/BookerLogo';
import LoginFormComponent from '../Components/LoginFormComponent';
import useLoginViewModel from './LoginViewModel';

export default function LoginPage() {
  const { onSubmitForm } = useLoginViewModel();

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <LoginFormComponent onSubmitForm={onSubmitForm} />
      <div className="absolute bottom-8">
        <BookerLogo />
      </div>
    </div>
  );
}
