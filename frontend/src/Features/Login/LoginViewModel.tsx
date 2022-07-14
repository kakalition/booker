import AuthAPI from '../../API/AuthAPI';
import LoginPayload from '../../API/Types/LoginPayload';

export default function useLoginViewModel() {
  const onSubmitSuccess = () => console.log('success');
  const onSubmitFailed = () => console.log('failed');

  const onSubmitForm = (value: any) => AuthAPI.login(
    onSubmitSuccess,
    onSubmitFailed,
    value as LoginPayload,
  );

  return { onSubmitForm };
}
