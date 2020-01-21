import React from 'react';
import './App.css';

var sampleData = require('./construction_shop_data.json');

function App(props) {
  const data = sampleData;
  let customers = data.customers
  let tableHeader = Object.keys(customers[0])
  let customersTable = [];

  customers.map(cust => {
    for (let [key, value] of Object.entries(cust)) {
      customersTable.push(value);
    }
    return customersTable;

  })
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Ronzos WS</p>
      </header>
    </div>
  );
}

export default App;
