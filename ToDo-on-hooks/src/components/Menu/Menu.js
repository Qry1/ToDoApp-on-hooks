import React, { useContext } from 'react';
import { Context } from '../Context/Context';

import './Menu.css'

export default function Menu() {

  const { filterByDate, sortByName, sortByDate, onSearch } = useContext(Context);

  return (
    <div className='menu'>
      <input
        placeholder='Search'
        className='input-sort'
        type='text'
        onChange={(e) => onSearch(e.target.value)} />
      <button 
        className='sort'
        onClick={() => sortByName()}>
        Sort by name
      </button>
      <button 
        className='sort'
        onClick={() => sortByDate()}>
        Sort by date
      </button>
      <input 
        className='input-date'
        type='date'
        onChange={(e) => filterByDate(e.target.value)} />
    </div>
  );
};