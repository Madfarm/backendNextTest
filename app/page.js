import Image from "next/image";

const getArticle = async () =>{
    var url = 'https://api.currentsapi.services/v1/search?langauge=us&category=programming&apiKey=_nzV85Gpfc5q7Qq_QuQ1rLNUTSKIh9r7uOtBD-ZLnczq0qNm';

    const res = await fetch(url);
    return await res.json()
}



export default async function HomePage(){

    const articles = await getArticle();
    const article = articles.news[4];

    console.log(article)
    return (
        <main>
            <article>
                <div className="article-section art-img">
                    {article?.image != 'None' ? <img src={article.image} /> : <h1>oops</h1>}
                </div>
                <div className="article-section art-desc">{article?.description}</div>
                <div className="article-section art-title">{article.title}</div>
                <div className="article-section art-nav">nav</div>
                
            </article>
        </main>
    )
}