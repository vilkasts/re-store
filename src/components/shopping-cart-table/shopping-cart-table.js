import React from 'react';
import './shopping-cart-table.css';
import {useDispatch, useSelector} from "react-redux";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "../../actions";


const ShoppingCartTable = ({ onIncrease, onDecrease, onDelete }) => {

  const { cartItems: items, orderTotal: total } = useSelector(state => state);

  const dispatch = useDispatch();

  onIncrease = (id) => dispatch(bookAddedToCart(id));
  onDecrease = (id) => dispatch(bookRemovedFromCart(id));
  onDelete = (id) => dispatch(allBooksRemovedFromCart(id));

  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"/>
          </button>
          <button className="btn btn-outline-success btn-sm float-right"
                  onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle"/>
          </button>
          <button className="btn btn-outline-warning btn-sm float-right"
                  onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    )
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: {total}
      </div>
    </div>
  );
};



export default ShoppingCartTable;