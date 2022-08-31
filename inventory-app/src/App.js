import {useState, useEffect} from 'react'
import {itemData} from '../server/models/inventory'

function App() {

  return (
      <main >	
        <h1>The Engineering org</h1>
        <h2>Inventory Items</h2>
            <div className = "card">
            <div className = "card-header">This Could be the Name of the item</div>
            <div className = "card-body">Maybe a description of the item</div>
            <div className = "card-footer">
              <button className = "btn">one or 2 buttons?</button>
              <button className = "btn2">one or 2 buttons?</button>     
            </div>    
          </div>
      </main>
  );
}

export default App;
