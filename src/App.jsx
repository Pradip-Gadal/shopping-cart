import React from 'react'
import NavBar from './component/NavBar'
import ProductListing from './component/ProductListing';



const App = () => {
  return (
    <main className='flex flex-col items-center h-screen bg-gradient-to-r from-green-700 to-sky-600'>
      <NavBar />
      <ProductListing />
    </main>      
  ) 
}

export default App;
