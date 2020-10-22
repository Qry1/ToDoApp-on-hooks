import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import List from '../List/List';
import Input from '../Input/Input';
import {Context} from '../Context/Context';

import './App.css';

export default function App() {

  const [ data, setData ] = useState([]);
  const [ terms, setTerms ] = useState('');

  useEffect(() => {
    const newData = localStorage.getItem('todo');
    setData(JSON.parse(newData) || [])
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(data))
  }, [data]);

  const createItem = (date, label) => {
    return {
      date: date,
      label: label,
      important: false,
      done: false,
      id: Math.floor(Math.random() * 1000)
    };
  };

  const addItem = (date, label) => {
    const newItem = createItem(date, label);
    setData([...data, newItem]);
  };
  
  const deleteItem = (id) => {
    setData(data.filter((item) => {
      return item.id !== id
    }));
  };

  const toggleImportant = (id) => {
    setData(data.map((item) => {
      if (item.id === id) {
        item.important = !item.important;
      };

      return item;
    }));
  };

  const toggleDone = (id) => {
    setData(data.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      };

      return item;
    }));
  };
  
  const filterByDate = (date) => {
    let newData = data.filter((item) => {
      return item.date === date;
    });

    setData([...newData]);
  }; 

  const sortByName = () => {
    let newData = data.sort((a, b) => {
      return (a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1;
    });
    
    setData([...newData]);
  };

  const sortByDate= () => {
    let newData = data.sort((a, b) => {
      return (a.date > b.date) ? 1 : -1;
    });

    setData([...newData]);
  };

  const onSearch = (terms) => {
    setTerms(terms);
  };

  const search = (items, terms) => {
    if(terms.length === 0) {
      return items;
    };
    
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(terms.toLowerCase()) > -1;
    });
  };

  const searchedData = search(data, terms);

  return (
    <Context.Provider 
      value={{ addItem, 
               deleteItem, 
               toggleImportant, 
               toggleDone, 
               filterByDate, 
               sortByName, 
               sortByDate,
               onSearch }}>
      <div className='app'>
        <Header />
        <Menu />
        <List data={searchedData} />
        <Input />
      </div>
    </Context.Provider>
  );
};

