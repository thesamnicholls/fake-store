import React from 'react'
import Tile from '../components/Tile'

const Home = (): JSX.Element => {
  return (
    <div className='l-page'>
      <h1 className='l-page__title'>Welcome to the Fake Store</h1>
      <h2 className='l-page__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h2>
      <h3 className='l-page__description--heading'>
        View some of our products
      </h3>
      <div className='l-grid'>
        <Tile title='Mens Clothing' id='men clothing' />
      </div>
    </div>
  )
}

export default Home
