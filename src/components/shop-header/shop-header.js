import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ShopHeader = () => {
  const { orderTotal, orderCount } = useSelector(state => state);
  const totalRound = +orderTotal.toFixed(2)
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link className="shopping-cart" to="/cart/">
        <i className="cart-icon fa fa-shopping-cart" />
        {orderCount} items (${totalRound})
      </Link>
    </header>
  );
};

export default ShopHeader;