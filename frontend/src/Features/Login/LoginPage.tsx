import BookerLogo from '../../Components/Logo/BookerLogo';
import LoginFormComponent from '../Components/LoginFormComponent';

export default function LoginPage() {
  const onSubmitForm = (value: any) => console.log(value);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <LoginFormComponent onSubmitForm={onSubmitForm} />
      <div className="absolute bottom-8">
        <BookerLogo />
      </div>
    </div>
  );
}
