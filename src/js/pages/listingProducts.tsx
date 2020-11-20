import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Card from '../components/Card/index'
import Search from '../components/Search'
import Select from 'react-select'
import Grid from '../components/Grid/index'

const ListingProducts = (props: any): JSX.Element => {
  // State to store all the products returned from the API
  const [products, setProducts] = useState<any[]>([])
  // State to store the option the user has selected in the dropdown
  const [selectedOption, setSelectedOption] = useState(null)
  // State to signal if the application is loading something
  const [isLoading, setIsLoading] = useState(true)
  //
  const [searchTerm, setSearchTerm] = useState('')

  const results = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  )

  // Storing the current page id in a variable
  const id = props.match.params.category_id

  // The options which will be used in the select dropdown to sort the data
  const options = [
    { value: 'ascending', label: 'High to Low' },
    { value: 'decending', label: 'Low to High' },
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
      <Search
        placeholder='Search Movies...'
        value={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <label className='c-label' htmlFor='priceSort'>
        Sort Price
      </label>
      <Select
        value={selectedOption}
        onChange={onHandleChange}
        options={options}
        className='c-select'
        classNamePrefix='c-select'
      />
      {!isLoading ? (
        <Grid>
          {results.map((product) => (
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

export default ListingProducts
