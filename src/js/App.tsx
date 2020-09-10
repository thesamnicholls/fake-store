import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Heading from './components/Heading'
import Home from './pages/Home'
import listingPage from './pages/listingProducts'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Heading title='Fake Store' />
      <Switch>
        <Route exact path='/fake-store' component={Home} />
        <Route
          exact
          path='/fake-store/category/:category_id'
          component={listingPage}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
