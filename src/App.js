import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import AddProperty from './Pages/Dashboard/AddProperty';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="add-property" element={<AddProperty />} />
        </Route>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
