import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__image"
          src="/assets/tamanna-rumee-mIqyYpSNq3o-unsplash (1).jpg"
          alt="Checkout Banner"
        />
        <div className="checkout__title">
          {user ? (
            <>
              <h2>Hello, {user.email.split('@')[0]}</h2>
              <h3>Your Shopping Basket:</h3>
              {basket.length > 0 ? (
                basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              ) : (
                <p>Your basket is currently empty.</p>
              )}
            </>
          ) : (
            <div>
              <h2>Guest User</h2>
              <p>
                Please <a href="/Login">Sign In</a> to access your items.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
       
      </div>
    </div>
  );
}

export default Checkout;
