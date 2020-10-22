import React from 'react';

import Item from '../Item/Item'

import './List.css'

export default function List({ data }) {

  const elements = data.map((item) => {
    return (
      <li key={item.id}>
        <Item data={item} />
      </li>
    );
  });
  
  return (
    <ul 
      className='list'>
      {elements}
    </ul>
  );
};

