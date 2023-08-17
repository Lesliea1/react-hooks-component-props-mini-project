import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const blogName = "React to me";
  const logoImage = "https://via.placeholder.com/215";
  const aboutText = "Welcome to my introduction on React!";
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "August 17, 2023",
      preview:
        "Learn the basics of React and how to set up your first project.",
    },
  ];
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={logoImage} about={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;