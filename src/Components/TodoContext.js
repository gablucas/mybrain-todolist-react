import React from 'react';
export const TodoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, setLists] = React.useState([]);
  const [filteredLists, setFilteredLists] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  return (
    <TodoContext.Provider value={{ lists, setLists, filteredLists, setFilteredLists, tags, setTags }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider } 