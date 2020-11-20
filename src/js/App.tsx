import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Heading from './components/Heading/index'
import Home from './pages/Home'
import ListingProducts from './pages/ListingProducts'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
      font-family: 'Poppins', sans-serif;
    }
`

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Heading title='Fake Store' />
      <Switch>
        <Route exact path='/fake-store' component={Home} />
        <Route
          exact
          path='/fake-store/category/:category_id'
          component={ListingProducts}
        />
      </Switch>
      <GlobalStyle />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </BrowserRouter>
  )
}

export default App

// TODO:
// - Style card component
// - Add in search bar for products
// - Admin dashboard
// - Make dropdown component
// - Add cart number indicator
// - Add more comments
// - Format price
// - Update readme
