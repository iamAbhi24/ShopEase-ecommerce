import { useEffect, useState } from "react";
import axios from "axios";

// useFetch is a custom hook for my project to provide data, error message and loading state.
function UseFetch(url) {
  const [mydata, setMydata] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getdata = async (url) => {
    try {
      const res = await axios.get(url);
      setMydata(res.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata(url);
  },[url]);

  return [mydata, error, loading];
}

export default UseFetch;
