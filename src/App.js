import React from 'react';
import './App.css';
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import stampCollection, { initDataManager } from './DataManager'


function App() {

  initDataManager();

  return (
    <div className="App">
      <div className="container">
        <div style={{backgroundColor: 'darksalmon'}}>
            <Header/>
        </div>
        <div style={{backgroundColor: '#A4F2FF'}}>
            <MainWindow stampCollection={stampCollection}/>
            
        </div>
      </div>
    </div>
  );
}

export default App;
