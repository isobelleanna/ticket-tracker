import React from 'react';
import "./Title.scss"

const Title = (props) => {
    const {titleText} = props
  return (
    <h1 className='title'>{titleText}</h1>
  )
}

export default Title