import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage= () =>{
    return (
      <>
        <section>
            <h2>Articles</h2>
      <ArticlesList articles={articles} />
        </section>

      </>

    )
}

export default ArticleListPage;