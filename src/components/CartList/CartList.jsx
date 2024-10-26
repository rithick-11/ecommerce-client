import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartList = ({data}) => {
    const {cartList} = data    
  return (
    <div className='bg-gray-600/10 rounded shadow-md-md px-4 py-6 mt-4'>
        <h1 className='text-xl font-semibold '>Cart List</h1>
        <ul className='space-y-3 mt-3'>
            {cartList.map((each) => <CartItem data={each} />) }
        </ul>
        <h1 className='text-gray-700 text-lg font-semibold mt-3 text-end'>Total: {data.total} Rs/-</h1>
    </div>
  )
}

export default CartList