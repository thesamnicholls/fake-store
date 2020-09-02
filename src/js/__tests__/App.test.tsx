import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', (): void => {
  it('should render without crashing', (): void => {
    render(<App />)
  })
})
