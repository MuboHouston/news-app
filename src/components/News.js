//useContext hook uses data from NewContextApi file
import React, {useContext} from 'react'
import { NewsContext } from "../NewsContextApi"
import NewsArticle from './NewsArticle';

function News(props) {

    const { newsArticles } = useContext(NewsContext);  
    return (
        <div>
            <h1>News</h1>
            <div>
                {
                newsArticles
                ? 
                newsArticles.map(news =>
                    <NewsArticle newsArticles={news} key={news.url} />
                ) : "No news"}
            </div>
        </div>
    )
}

export default News;