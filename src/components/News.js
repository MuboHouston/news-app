//useContext hook uses data from NewContextApi file
import React, {useContext} from 'react'
import { NewsContext } from "../NewsContextApi"
import NewsArticle from './NewsArticle';

function News(props) {

    const { data } = useContext(NewsContext);

    return (
        <div>
            {data
            ? data.articles.map(news =>
                <NewsArticle data={news} key={news.url} />
            )
        : "No news"}
        </div>
    )
}

export default News;