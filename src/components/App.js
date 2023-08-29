import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);


//Header, Image & About in array
const newBlogData = []

 //Name for Header
const headerName = blogData.name
newBlogData.push(headerName)

//Image & text for About
const aboutImage = blogData.image
 newBlogData.unshift(aboutImage)
const aboutText = blogData.about
newBlogData.push(aboutText)

console.log(newBlogData)

function App() {
  return (
    <div className="App">
      <Header name={newBlogData[1]} />
      <About imageSrc={newBlogData[0]} text={newBlogData[2]}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
