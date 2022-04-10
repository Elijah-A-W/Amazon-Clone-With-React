import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function payment() {
  const [{ basket, user }, dispatch] = useStateValue();




  return (
    <div className='payment'>
        <div className="payment__container">

            <div className="payment__section">
                    <div className="payment__title"> 
                          <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                          {/* <p>{user?.email}</p>   */}
                    </div>
            </div>


            <div className="payment__section">

            </div>

            <div className="payment__section">

            </div>
        
        </div>
    </div> 
  )
}

export default payment
