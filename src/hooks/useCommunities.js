import { DataArrayTwoTone } from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";

const CommunitiesContext = createContext({
  communities: new Array(),
  loading: true,
  error: false,
  refretchCommunities: async () => {},
});

export const useCommunities = () => useContext(CommunitiesContext);

export const CommunitiesContextProvider = ({ children }) => {
  const {
    data: communities,
    error,
    mutate,
    loading,
  } = useApi("/communities", {});

  return (
    <CommunitiesContext.Provider
      value={{ communities, error, loading, refretchCommunities: mutate }}
    >
      {children}
    </CommunitiesContext.Provider>
  );
};
