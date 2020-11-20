import React from 'react'
import * as Styles from './styles'

type CardProps = {
  id: number
  image: string
  title: string
  description: string
  price: number
}

export default function Card({
  id,
  image,
  title,
  description,
  price,
}: CardProps) {
  function convertToPounds(number: number) {
    return '£' + number.toFixed(2)
  }

  return (
    <Styles.Card key={id}>
      <Styles.CardImage src={image} alt={title} />
      <Styles.CardTitle>{title}</Styles.CardTitle>
      <Styles.CardDescription>{description}</Styles.CardDescription>
      <Styles.CardPrice>{convertToPounds(price)}</Styles.CardPrice>
    </Styles.Card>
  )
}
