import React from 'react';
import './App.css';
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import DataManager from './DataManager'

function App() {

  const dataManager = new DataManager();
  dataManager.initDataManager();

  return (
      <div className="App">
        <div className="container">
          <div>
              <Header/>
              <MainWindow stampCollection={dataManager.stampCollection} dataManager={dataManager} />
          </div>
        </div>
      </div>
  );
}

export default App;
