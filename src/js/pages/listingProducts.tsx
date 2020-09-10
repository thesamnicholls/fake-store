import React, { useState } from 'react'
import Tile from '../components/Tile'

const listingProducts = (props: any): JSX.Element => {
  // Storing the current page id in a variable
  const id = props.match.params.category_id

  // Fetching all of the products from the cateogry of the given id
  fetch(`https://fakestoreapi.com/products/category/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json))

  return (
    <div className='l-page'>
      <h1>{id}</h1>
    </div>
  )
}

export default listingProducts
