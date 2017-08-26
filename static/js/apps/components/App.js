import React, { Component } from 'react';
import ItemList from './ItemList';
import CartItems from './CartItems';

class App extends Component {
  render() {
    return(
      <div className="container">
        <CartItems />
        <ItemList />
      </div>
    );
  }
}

export default App;
