import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'


const App = () => {
  return (
    <main className='flex flex-col items-center h-screen bg-gradient-to-r from-green-700 to-sky-600'>
      <NavBar />
      <Home />
    </main>      
  ) 
}

export default App;
