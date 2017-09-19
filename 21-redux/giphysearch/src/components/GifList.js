import React from 'react'

const GifsList = (props) => {
  const gifs = props.gifs.map((gif, index) => <li key={index}><a href={gif.url}>{gif.slug}</a></li>)
  return (
    <ul>
    {gifs}
    </ul>
  )
}

export default GifsList
