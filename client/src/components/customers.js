import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  deleteid = event =>
  {
    let custo= this.state.customers;
    this.setState(custo.splice(custo.id - 1,1))
    console.log(custo.id)
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map((customer,i) =>
          <li key={customer.id} id={customer.id}>{customer.firstName} {customer.lastName}{
            <button
               id={customer.id}
               onClick={this.deleteid}
              >hello les gens</button>
          }</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
