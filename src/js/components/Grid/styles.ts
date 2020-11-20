import styled from 'styled-components'
import { mediaQueries } from '../../base/breakpoints'
import { Props } from './index'

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-gap: 40px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;

  ${mediaQueries('ms')`
    padding: 20px;
  `}

  ${({ modifier }) =>
    modifier === 'card' &&
    `
      grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
      max-width: 3000px;
    `}
`
