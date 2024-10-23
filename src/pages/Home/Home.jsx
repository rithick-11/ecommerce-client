import React from 'react'
import HeroCoursel from '../../components/HeroCoursel/HeroCoursel'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
  return (
    <div className='container mt-16'>
        <HeroCoursel />
        <ProductList />
    </div>
  )
}

export default Home