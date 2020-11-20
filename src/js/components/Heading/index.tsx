import React from 'react'
import * as Styles from './styles'

export interface Props {
  title: string
}

export default function Heading({ title }: Props) {
  return (
    <Styles.Heading>
      <Styles.HeadingLink href='/fake-store'>
        <Styles.HeadingText>{title}</Styles.HeadingText>
      </Styles.HeadingLink>
    </Styles.Heading>
  )
}
