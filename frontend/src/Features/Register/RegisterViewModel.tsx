import AuthAPI from '../../API/AuthAPI';
import RegisterPayload from '../../API/Types/RegisterPayload';

export default function useRegisterViewModel() {
  const onSubmitForm = (value: any) => AuthAPI.register(
    onSubmitSuccess,
    onSubmitFailed,
    value as RegisterPayload,
  );

  return { onSubmitForm };
}
