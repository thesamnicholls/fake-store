import styled from 'styled-components'
import { BLACK, WHITE } from '../../base/colours'
import { mediaQueries } from '../../base/breakpoints'

export const Heading = styled.div`
  background-color: ${BLACK};
  text-align: center;
  padding: 10px;

  ${mediaQueries('ms')`
    padding: 40px;
  `}
`

export const HeadingLink = styled.a`
  text-decoration: none;
  color: ${WHITE};
`

export const HeadingText = styled.h1`
  color: ${WHITE};
  font-size: 30px;
  margin: 0;

  ${mediaQueries('ms')`
    font-size: 40px;
  `}
`
