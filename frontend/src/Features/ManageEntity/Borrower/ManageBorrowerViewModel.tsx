import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useManageBorrowerViewModel() {
  const [borrowerData, setBorrowerData] = useState<any>();

  const fetchData = (params: any = null) => axios.get('/api/borrowers', { params })
    .then((response) => setBorrowerData(response.data));

  useEffect(() => { fetchData(); }, []);

  return {
    borrowerData,
    fetchData,
  };
}
