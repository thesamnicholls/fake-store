import React, { useState, useEffect } from 'react'
import Tile from '../components/Tile'
import Card from '../components/Card/index'
import Loading from '../components/Loading'
import Grid from '../components/Grid/index'

const Home = (): JSX.Element => {
  // State to store the first four products returned from the API
  const [products, setProducts] = useState<any[]>([])
  // State to signal if the application is loading something
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetching the first 4 products from the api and then storing them in state
    fetch('https://fakestoreapi.com/products?limit=4')
      // Storing the response in json format
      .then((response) => response.json())
      // Setting the products state to the data returned
      .then((data) => setProducts(data))
      // Once all the data has been fetched, set the loading state to false
      .then(() => setIsLoading(false))
  }, [])

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
        <Tile title='Womens Clothing' id='women clothing' />
        <Tile title='Jewelery' id='jewelery' />
        <Tile title='Electronics' id='electronics' />
      </div>
      <h3 className='l-page__description--heading'>
        Here are some of our featured products
      </h3>
      {!isLoading ? (
        <Grid modifier='card'>
          {products.map((product) => (
            <Card
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </Grid>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Home
