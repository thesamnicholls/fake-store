import React from 'react'

type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className='c-heading'>
      <a href='/fake-store' className='c-heading__link'>
        <h1 className='c-heading__text'>{title}</h1>
      </a>
    </div>
  )
}

export default Heading
