import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import AuthorDetail from './components/AuthorDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorList />} />
        <Route path="/new" element={<AuthorForm />} />
        <Route path="/edit/:id" element={<AuthorForm />} />
        <Route path="/detail/:id" element={<AuthorDetail />} />
      </Routes>
    </div>
  );
}

export default App;
