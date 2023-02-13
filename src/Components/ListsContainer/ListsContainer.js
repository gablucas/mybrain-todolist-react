import React from 'react';
import List from '../List/List';
import Masonry from 'react-masonry-css';
import { TodoContext } from '../TodoContext';

const ListsContainer = () => {
  const { filteredLists } = React.useContext(TodoContext);
  
  const breakpointColumnsObj = {
    default: 5,
    1920: 4,
    1440: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {filteredLists.map((list) => (<List key={list.id} data={list} />))}
    </Masonry>
  )
}

export default ListsContainer