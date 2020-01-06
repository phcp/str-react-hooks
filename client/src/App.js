import React from 'react';
import Feed from './feed/Feed';
import Followers from './followers/Followers';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ marginTop: "20px" }} >
          <Feed />
        </div>
        <div className="col">
          <Followers />
        </div>
      </div>
    </div>
  );
}

export default App;
