import React from 'react'
import * as Styles from './styles'

export interface Props {
  children: JSX.Element | JSX.Element[]
  modifier?: 'card'
}

export default function Grid({ modifier, children }: Props) {
  return <Styles.Grid modifier={modifier}>{children}</Styles.Grid>
}
