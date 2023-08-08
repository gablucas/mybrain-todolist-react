import React from 'react';
import { getLocalStorage, setLocalStorage } from '../Helpers/handleLocalStorage';
export const TodoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, setLists] = React.useState(getLocalStorage('mybrain', []));
  const [filteredLists, setFilteredLists] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  setLocalStorage('mybrain', lists);

  return (
    <TodoContext.Provider value={{ lists, setLists, filteredLists, setFilteredLists, tags, setTags }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider } 