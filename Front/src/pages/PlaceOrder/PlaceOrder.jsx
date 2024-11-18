/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'


const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">DELIVERY - INFORMATION </p>
        <div className="multi-fields">
          <input type="text" placeholder ="First name" name="" id="" />
          <input type="text" placeholder ="Last name" name="" id="" />
        </div>
        <input type="Email" placeholder='Email address' />
        <input type="Text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder ="City" name="" id="" />
          <input type="text" placeholder ="State" name="" id="" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder ="Zip code" name="" id="" />
          <input type="text" placeholder ="Country" name="" id="" />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">

          <h3>Confirma tu orden Kauzaaa</h3>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>s/{getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>s/{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >PAGANDO PAGANDOOO KAUZZAA</button>
        </div>


      </div>
    </form>
  )
}

export default PlaceOrder
