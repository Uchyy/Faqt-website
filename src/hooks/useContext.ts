import { useContext } from "react";

export const useNetflixSettings = () => {
  return useContext(NetflixSettingsContext);
};