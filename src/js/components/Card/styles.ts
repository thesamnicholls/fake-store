import styled from 'styled-components'
import { BLACK } from '../../base/colours'

export const Card = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  padding: 20px;
  list-style: none;
  border: 1px solid ${BLACK};
`

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`

export const CardTitle = styled.p`
  margin: 30px 0;
  font-size: 20px;
  text-align: center;
`

export const CardDescription = styled.p`
  line-height: 1.2;
  font-size: 18px;
`

export const CardPrice = styled.p`
  align-self: flex-start;
`
