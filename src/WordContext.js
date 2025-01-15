import React, { createContext, useState } from "react";



export function WordProvider({ children }) {
  const [tableData, setTableData] = useState([]); 
  const [learnedWords, setLearnedWords] = useState([]); 

  return (
    <WordContext.Provider value={{ tableData, setTableData, learnedWords, setLearnedWords }}>
      {children}
    </WordContext.Provider>
  );
}


export const WordContext = createContext();

