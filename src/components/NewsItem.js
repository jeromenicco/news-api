import React from 'react'

import './NewsItem.css'



function NewsItem({ data }) {
    const { title, description, urlToImage } = data

  return (
    <div className='news-item-container'>
        <img src={urlToImage} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default NewsItem
