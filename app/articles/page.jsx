"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";






export default function ArticlesPage(props){
    const articles  = props.params.articles.news
    const [carouselIdx, setCarouselIdx] = useState(10)


    

    function handleNavClick(direction) {
        if (direction == "right"){
            setCarouselIdx(carouselIdx + 1)
        } else {
            setCarouselIdx(carouselIdx - 1)
        }
    }

    const article = articles[carouselIdx];
    
    return (
        <main>
            <article className="slide-out">
                <div className="article-section art-img">
                    {article?.image != 'None' ? <img src={article.image} /> : <h1>oops</h1>}
                </div>
                <div className="article-section art-desc">{article?.description}</div>
                <div className="article-section art-title">{article.title}</div>
                <div className="article-section art-nav">
                    <FontAwesomeIcon onClick={() => handleNavClick('right')} icon={faArrowRight} style={{color: "#ffffff"}} size={"2xl"} />
                    <FontAwesomeIcon onClick={() => handleNavClick('left')} icon={faArrowLeft} style={{color: "#ffffff"}} size={"2xl"} />
                </div>
            </article> 
        </main>
    )
}