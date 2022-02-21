import React, { createContext, useContext, useEffect, useState } from "react";
import { getEqDataApi } from "../api/eqDataApi";

export const EqDataContext = createContext({
  eqData: [],
  loading: true,
  initialized: false,
  loadEqData: async () => {}
});

export const EqDataProvider = function ({ children }) {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [eqData, setEqData] = useState([]);

  useEffect(() => {
    const initialLoading = async () => {
      await loadEqData();
      setInitialized(true);
    };

    initialLoading();
  }, []);

  const loadEqData = async function () {
    setLoading(true);
    const eqData = await getEqDataApi();
    setEqData(eqData);
    setLoading(false);
  };

  return (
    <EqDataContext.Provider
      value={{
        eqData,
        initialized,
        loading,
        loadEqData
      }}
    >
      {children}
    </EqDataContext.Provider>
  );
};

export const useEqData = () => useContext(EqDataContext);
