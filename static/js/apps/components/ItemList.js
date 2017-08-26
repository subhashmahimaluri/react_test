import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemById } from '../actions';

class ItemList extends Component {
  displayMessage() {
    let message = '';
    if(this.props.catalog.length == 0) {
      message = 'No Products in List';
    }
    return message;
  }

  render() {
    return (
      <div className="row text-center">
        <h2>Products List</h2>
        <p>{this.displayMessage()}</p>
        {this.props.catalog.map((item) => {
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
                  <div className="btn btn-primary" onClick={() => this.props.addItemById(item.id)}>Add to Cart</div>
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
  return { catalog: state.itemsList }
}

export default connect(mapStateToProps, { addItemById })(ItemList);
