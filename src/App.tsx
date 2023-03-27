import React from 'react';
import { Container } from '@mui/material';
import MainLayout from './components/templates/MainLayout';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <MainLayout>
      <Container maxWidth="lg" className="mt-20">
        <HomePage />
      </Container>
    </MainLayout>
  );
}

export default App;
