import {useParams} from "react-router-dom"
import articles from "./article-content";

const ArticlePage= () =>{
    const {articleId} = useParams();
const article = articles.find(article => article.name === articleId);
    return (
        <>
        <section>
            <h2>{article.title}</h2>
            {article.content.map(paragrah => (
                <p>{paragrah}</p>
            ))}
        </section>

        </>
    )
}

export default ArticlePage;