import { DataArrayTwoTone } from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";

const CommunityContext = createContext({
  communities: new Array(),
  loading: true,
  error: false,
  refretchCommunities: async () => {},
});

export const useCommunities = () => useContext(CommunityContext);

export const CommunitiesContextProvider = ({ children }) => {
  const {
    data: communities,
    error,
    mutate,
    loading,
  } = useApi("/communities", {});

  return (
    <CommunityContext.Provider
      value={{ communities, error, loading, refretchCommunities: mutate }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
