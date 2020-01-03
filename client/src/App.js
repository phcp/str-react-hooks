import React from 'react';
import './App.css';
import Feed from './feed/Feed';
import Followers from './followers/Followers';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Feed></Feed>
        </div>
        <div className="col">
          <Followers></Followers>
        </div>
      </div>
    </div>
  );
}

export default App;
