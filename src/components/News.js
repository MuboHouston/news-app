//useContext hook uses data from NewContextApi file
import React, {useContext} from 'react'
import { NewsContext } from "../NewsContextApi"
import NewsArticle from './NewsArticle';

function News(props) {

    const { newsArticles } = useContext(NewsContext);  
    return (
        <div className={"row row-cols-1 row-cols-md-3 g-4 m-2"}>
            {
            newsArticles
            ? 
            newsArticles.map(news =>
                <NewsArticle newsArticles={news} key={news.url} />
            ) : ""}
        </div>
    )
}

export default News;