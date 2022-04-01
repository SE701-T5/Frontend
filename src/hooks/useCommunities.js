import { DataArrayTwoTone } from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";

const HouseContext = createContext({
  communities: [""],
  loading: true,
  error: false,
  refretchCommunities: async () => {},
});

export const useCommunities = () => useContext(HouseContext);

export const CommunitiesContextProvider = ({ children }) => {
  const {
    data: communities,
    error,
    mutate,
    loading,
  } = useApi("/communities", {});

  return (
    <HouseContext.Provider
      value={{ communities, error, loading, refretchCommunities: mutate }}
    >
      {children}
    </HouseContext.Provider>
  );
};
