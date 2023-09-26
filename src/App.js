import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Demo from './components/Demo';

function App() {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div>
      <Header />
      <Routes>
        <Route 
            path="/" 
            element = {
                <MainContainer />
            } 
        />
        <Route 
            path="watch" 
            element={
                <WatchPage />
            } 
        />
        <Route 
            path="demo" 
            element={
                <Demo/>
            } 
        />
      </Routes>
      <Sidebar isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;

