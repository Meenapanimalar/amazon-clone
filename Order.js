import React from 'react'
import './Order.css'
import moment from 'moment';
import { NumericFormat } from 'react-number-format';
import CheckoutProduct from './CheckoutProduct';




function Order({ order }) {
    
  return (
    <div className='order'>
      
      
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      
      <p className="order__id">
        <small>ProductID: {order.id}</small>
      </p>
      {order.data.basket?.map(item =>(
        <CheckoutProduct
                       id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                            />
      ))}
       <NumericFormat
            value={order.data.amount/100}
            displayType="text"
            thousandSeparator={true}
            prefix="₹"
            decimalScale={2}
            renderText={(value) => (
                
                    <h3 className='order__total'>Order Total: {value} <span>payment processed successfully</span></h3>
               
            )}
            />
            
    </div>
  )
}

export default Order
