import {useParams} from "react-router-dom"
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage= () =>{
    const {articleId} = useParams();
const article = articles.find(article => article.name === articleId);

if(!article){
    return <NotFoundPage />
}


    return (
        <>
        <section>
            <h2>{article.title}</h2>
            {article.content.map(paragrah => (
                <p key={paragrah}>{paragrah}</p>
            ))}
        </section>

        </>
    )
}

export default ArticlePage;