import { createContext, useContext, useState } from "react";
import { data } from "../data/data";

const HouseData: any = createContext([]);
export const HousesDataProvider = ({ children }: any) => {
  const [houseDataArray, setHouseDataArray] = useState(data);
  return (
    <HouseData.Provider value={houseDataArray}>{children}</HouseData.Provider>
  );
};

export const useHouseData = () => useContext(HouseData);
