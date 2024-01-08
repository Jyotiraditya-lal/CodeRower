import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Update from './components/update';
import Fetch from './components/fetch';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Fetch />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Layout>
  );
}

export default App;
