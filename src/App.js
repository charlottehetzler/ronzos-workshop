import React from 'react';
import './App.css';
// import { objectTypeAnnotation } from '@babel/types';

const sampleData = require('./construction_shop_data.json');
const data = sampleData;


class CustomersTable extends React.Component {  
  render() {
    const customers = data.customers;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td><p>Name</p></td>
              <td>
                <p>Memership Status</p>
              </td>
              <td><p>Customer Years</p></td>
              <td><p>Top Products</p></td>
            </tr>
          </thead>
          <tbody>
            { customers.map(customer => {return <tr>
              <td><p>{customer.name}</p></td>
              {customer.membership_status === 'Member' ? <td><p className="green">{customer.membership_status}</p></td> : <td><p className="red">{customer.membership_status}</p></td>}
              <td>
                <p>{customer.customer_for_years}</p></td>
              <td>{customer.top_products.map(product => {return <p>{product}</p>})}</td>
            </tr>})}
          </tbody>
        </table>
      </div>
    )
  }
}

class ProductsTable extends React.Component {
  render () {
    let products = data.products;
    return (
      <div>
        <table>
          <thead>
            <tr> 
              {Object.keys(products[0]).map(header => {return <td><p><strong>{header}</strong></p></td>})}
            </tr>
          </thead>
          <tbody>
              {products.map(product => {return <tr>
                <td><p>{product.title}</p></td>
                {product.quantity < 40 ? <td><p className="red">{product.quantity}</p></td> : <td><p>{product.quantity}</p></td>}
                <td><p>{product.quantity}</p></td>
              </tr>})}
          </tbody>
        </table>
      </div>
    )
  }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ronzos WS</p>
      </header>
        <CustomersTable/>
        <ProductsTable/>

      <style jsx>
        {`
        p {
          margin: .2em;
        }
        table {
          width: 100%;
        }
        .green {
          color: #13ba13;
        }
        .red {
          color: #bd320b;
        }
        `}
      </style>
    </div>
  );
}

export default App;
