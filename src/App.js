import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ProductsList from './components/ProductsList/ProductsList';
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

function App() {
  const [open, setOpen] = useState (false);

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect( () => {

  })

  return (
    <div className="App">
      <NavBar />
      <Container>
        <ItemListContainer/>
        <ProductsList/>
      </Container>
    </div>
  );
}

export default App;
