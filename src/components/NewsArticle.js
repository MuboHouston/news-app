import React from 'react'

function NewsArticle({ newsArticles }) {
  return (
    <div>
        <h4>
            <a href={newsArticles.url} target="blank">{newsArticles.title}</a>
        </h4>
        <h5>by: {newsArticles.author}</h5>
        <p>{newsArticles.description} <span><a href={newsArticles.url} target="blank">read more</a></span></p>
        <img src={newsArticles.urlToImage} alt={newsArticles.title} />

    </div>
  )
}

export default NewsArticle