import React from 'react'

function NewsArticle({ data }) {
  return (
    <div>
        <a href={data.url} target="blank">{data.title}</a>
    </div>
  )
}

export default NewsArticle