import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Create from './pages/Create';
import Show from './pages/Show';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="create/" element={<Create /> }></Route>
        <Route path="todo/:id" element={<Show /> }></Route>
        <Route path="edit/:id" element={<Create /> }></Route>
      </Route>
    </Routes>
  );
};
export default App;