import React from 'react'

function NewsArticle({ newsArticles }) {
    return (
        <div className={"row row-cols-1 row-cols-md-3 g-4"}>
            <div class="col">
                <div class="card h-100">
                    <img className='card-img-top' src={newsArticles.urlToImage} alt={newsArticles.title} />
                    <div className={'card-body'}>
                        <h4 className={"card-title"}>
                            <a href={newsArticles.url} target="blank">{newsArticles.title}</a>
                        </h4>
                        <p className={"card-text"}>{newsArticles.description} <span><a href={newsArticles.url} target="blank">read more</a></span></p>
                        <div class="card-footer">
                        <h5 className={"card-subtitle mb-2 text-muted"}>by: {newsArticles.author}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle