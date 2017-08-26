import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemById } from '../actions';

class CartItems extends Component {
  displayMessage() {
    let message = '';
    if(this.props.cartItems.length == 0) {
      message = 'Empty Cart';
    }
    return message;
  }

  render() {
    return (
      <div className="row text-center">
        <h2>Cart</h2>
        <p>{this.displayMessage()}</p>
        {this.props.cartItems.map((item) => {
          return(
            <div key={item.id} className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.imageURL}
                  alt={item.name}
                />
                <div className="card-body">
                  <p className="card-text">{item.currency}{item.price}</p>
                  <h4 className="card-title">{item.name}</h4>
                </div>
                <div className="card-footer">
                  <div className="btn btn-primary" onClick={() => this.props.removeItemById(item.id)}>Remove from Cart</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps( { cartItems } ) {
  return { cartItems }
}

export default connect(mapStateToProps, { removeItemById })(CartItems);
