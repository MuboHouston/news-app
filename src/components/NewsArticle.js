import React from 'react'

function NewsArticle({ data }) {
  return (
    <div>
        <h1>
            {data.title}
        </h1>
    </div>
  )
}

export default NewsArticle