import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Select from 'react-select'

const ListingProducts = (props: any): JSX.Element => {
  // State to store all the products returned from the API
  const [products, setProducts] = useState<any[]>([])
  // State to store the option the user has selected in the dropdown
  const [selectedOption, setSelectedOption] = useState(null)
  //
  const [isLoading, setIsLoading] = useState(true)

  // Storing the current page id in a variable
  const id = props.match.params.category_id

  // The options which will be used in the select dropdown to sort the data
  const options = [
    { value: 'ascending', label: 'Ascending' },
    { value: 'decending', label: 'Decending' },
  ]

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .then(() => setIsLoading(false))
  }, [id])

  const onHandleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption)
    if (selectedOption.value === 'decending') {
      setProducts([...products].sort((a, b) => (a.price > b.price ? 1 : -1)))
    } else {
      setProducts([...products].sort((a, b) => (a.price < b.price ? 1 : -1)))
    }
  }

  return (
    <div className='l-page'>
      <h2 className='c-title'>{id}</h2>
      <label htmlFor='priceSort'>Sort Price</label>
      <Select
        value={selectedOption}
        onChange={onHandleChange}
        options={options}
        className='c-select'
        classNamePrefix='c-select'
      />
      {!isLoading ? (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ListingProducts
