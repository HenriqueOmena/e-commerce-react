import { useState, useEffect } from "react";

function useRequest(url) {
  const [data, setData] = useState("Bret");
  useEffect(() => {
    console.log("entrou useRequest");
    const fetchFunc = async () => {
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson[0]);
      console.log("foi pedido useRequest?", resJson);
    };
    fetchFunc();
  }, []);

  return data;
}

export default useRequest;
