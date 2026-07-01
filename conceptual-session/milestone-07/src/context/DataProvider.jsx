"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.npoint.io/37bf11ee115c06d98dd2/data",
        );
        console.log(res);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
export default DataProvider;
