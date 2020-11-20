import React from 'react'
import { render } from '@testing-library/react'
import Heading from './index'

describe('Heading', (): void => {
  it('Should render the Heading component', (): void => {
    render(<Heading title='Heading Title' />)
  })
})
