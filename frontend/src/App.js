import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Create from './pages/Create';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="create/" element={<Create /> }></Route>
      </Route>
    </Routes>
  );
};
export default App;