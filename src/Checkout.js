import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';



function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); 

  return (
    <div className="Checkout">
          <div className="Checkout__left">
              <img className="Checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>                 
                  <div>
                      <h2 className="Checkout__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                            />
                        ))}
                  </div> 
          </div>   
          <div className="Checkout__right">
              <Subtotal/>    
          </div>    
    </div>
  )
}

export default Checkout
