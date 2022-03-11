import './App.css';

import React, {useState, useEffect} from 'react';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
import { getNotes } from './actions/notes';

import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <Sidebar currentId={currentId} setCurrentId={setCurrentId}/>
      <Main currentId={currentId}/>
    </div>
  );
}

export default App;