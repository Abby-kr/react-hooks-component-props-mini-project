import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const articleArray = [] 
    posts.map(post =>{
        articleArray.push(<Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>)
    })
    console.log(articleArray)
    return (
            <main>
                {articleArray}
            </main>
    )
    
}

export default ArticleList;