import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

 //Name for Header
const headerName = blogData.name

//Image for About
const logo = blogData.image

function App() {
  return (
    <div className="App">
      <Header name={headerName} />
      <About image={logo} about="About this blog"/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
