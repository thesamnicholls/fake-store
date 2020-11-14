import React from 'react'
import { render } from '@testing-library/react'
import Tile from '../components/Tile'
import { BrowserRouter } from 'react-router-dom'

describe('<Tile />', () => {
  test('Should render the Tile component', () => {
    const title = 'Test title'
    const id = 'Test ID'
    const { container } = render(
      <BrowserRouter>
        <Tile title={title} id={id} />
      </BrowserRouter>,
    )
    expect(container.firstChild).toBeTruthy()
  })
})
