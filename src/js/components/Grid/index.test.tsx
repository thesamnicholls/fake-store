import React from 'react'
import { render } from '@testing-library/react'
import Grid from './index'

describe('Grid', (): void => {
  it('Should render the Grid component', (): void => {
    render(
      <Grid>
        <h1>Loading the Grid Component</h1>
      </Grid>,
    )
  })
})
