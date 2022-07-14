import BookerLogo from '../../Components/Logo/BookerLogo';
import RegisterFormComponent from '../Components/RegisterFormComponent';

export default function RegisterPage() {
  const onSubmitForm = (value: any) => console.log(value);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <RegisterFormComponent onSubmitForm={onSubmitForm} />
      <div className="absolute bottom-8">
        <BookerLogo />
      </div>
    </div>
  );
}
