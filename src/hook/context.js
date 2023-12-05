import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Initial Data");
  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

const ChildComponent = () => {
  const { data, updateData } = useContext(DataContext);
  return (
    <div>
      <p>Data in Child: {data}</p>
      <button onClick={() => updateData("Updated Data")}>Update Data</button>
    </div>
  );
};
export default ChildComponent;
