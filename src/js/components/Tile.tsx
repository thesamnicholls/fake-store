import React from 'react'
import { Link } from 'react-router-dom'

type TileProps = {
  title: string
  id: string
}

const Tile = ({ title, id }: TileProps) => {
  return (
    <Link
      className='c-tile'
      to={'/fake-store/category/' + id}
      title={'Click here to view the projects in ' + id}
    >
      <p className='c-tile__title'>{title}</p>
    </Link>
  )
}

export default Tile
