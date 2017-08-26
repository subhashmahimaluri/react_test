import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemById, removeMoney } from '../actions';

class CartItems extends Component {
  displayMessage() {
    let message = '';
    if (this.props.cartItems.length == 0) {
      message = 'Empty Cart';
    }
    return message;
  }

  render() {
    return (
      <div className="row text-center">
        <h2>Cart</h2>
        <div className="btn btn-primary">
          Cart Amount ${this.props.cartAmount}
        </div>
        <p>
          {this.displayMessage()}
        </p>
        {this.props.cartItems.map(item => {
          return (
            <div key={item.id} className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.imageURL}
                  alt={item.name}
                />
                <div className="card-body">
                  <p className="card-text">
                    {item.currency}
                    {item.price}
                  </p>
                  <h4 className="card-title">
                    {item.name}
                  </h4>
                </div>
                <div className="card-footer">
                  <div
                    className="btn btn-primary"
                    onClick={() => {
                      this.props.removeItemById(item.id);
                      this.props.removeMoney(item.price);
                    }}
                  >
                    Remove from Cart
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
    cartAmount: state.cartAmount
  };
}

export default connect(mapStateToProps, {
  removeItemById,
  removeMoney
})(CartItems);
