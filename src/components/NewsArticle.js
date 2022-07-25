import React from 'react'

function NewsArticle({ newsArticles }) {
    return (
        <div class="col">
            <div class="card h-100">
                <img className='card-img-top' src={newsArticles.urlToImage} alt={newsArticles.title} />
                <div className={'card-body'}>
                    <h4 className={"card-title"}>
                        <a href={newsArticles.url} target="blank">{newsArticles.title}</a>
                    </h4>
                    <p className={"card-text"}>{newsArticles.description} <span><a href={newsArticles.url} target="blank">read more</a></span></p>
                </div>
            </div>
        </div>

    )
}

export default NewsArticle