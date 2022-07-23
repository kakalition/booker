import { useEffect, useState } from 'react';
import CheckInAPI from '../../../API/CheckInAPI';

export default function useManageCheckInViewModel() {
  const [checkInData, setCheckInData] = useState<any>();

  const fetchData = (params: any = null) => CheckInAPI.get(params)
    .then((response) => setCheckInData(response.data));

  useEffect(() => { fetchData(); }, []);

  return {
    checkInData,
    fetchData,
  };
}
