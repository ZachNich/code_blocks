import React from 'react';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row site-header">
        <div class="col-sm-2">
          First Row
        </div>
      </div>
      <div class="row site-main justify-content-between">
        <div class="col-sm-8 game-puzzle">
          Second Row, First Column
        </div>
        <div class="col-sm game-pieces">
          Second Row, Second Column
        </div>
      </div>
    </div>
  );
}

export default App;