import "../Projects/Projects.css";
import Fade from "react-reveal/Fade";
import BlogCard from "../UI/BlogCard/BlogCard";
import Carousel from "react-simply-carousel";
import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Blog.css";
const Blog = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  let content = {
    English: {
      mainTitle: "Featured Blog Posts",
      posts: [
        {
          title: "Three Simple Tricks I Use To Make My Sites Load Faster",
          image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
          link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
        },
        {
          title: "Using Recursion to Insert Values Into a Sorted Binary Tree",
          image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
          link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
        },
        {
          title: "An Intro to Recursion",
          image: "https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "this.concept = important",
          image: "https://media.giphy.com/media/26FLgGTPUDH6UGAbm/giphy.gif",
          link: "https://zachinjapan.com/This.Concept%20=%20important/",
        },
        {
          title: "count++ !== ++count",
          image: "https://media.giphy.com/media/3o6nV5TdYIA48G7VYI/giphy.gif",
          link: "https://zachinjapan.com/count++%20!=%20++count/",
        },
      ],
    },
    Japanese: {
      mainTitle: "ブログ記事",
      posts: [
        {
          title: "サイトの読み込みを高速化するため3つの簡単なコツ（英語）",
          image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
          link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
        },
        {
          title: "高階関数　（英語）",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
        },
        {
          title: "再帰を使用して、Sorted Binary Treeに番号を挿入方法 （英語）",
          image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
          link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
        },
        {
          title: "再帰 (英語）",
          image: "https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "this.concept = important （英語）",
          image: "https://media.giphy.com/media/26FLgGTPUDH6UGAbm/giphy.gif",
          link: "https://zachinjapan.com/This.Concept%20=%20important/",
        },
        {
          title: "count++ !== ++count （英語）",
          image: "https://media.giphy.com/media/3o6nV5TdYIA48G7VYI/giphy.gif",
          link: "https://zachinjapan.com/count++%20!=%20++count/",
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div
      className="CodingChallenges Projects"
      id="Blog"
      style={{
        marginBottom: "50px",
      }}
    >
      <Fade>
        <h1>{content.mainTitle}</h1>
      </Fade>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Carousel
          updateOnItemClick
          containerProps={{
            style: {
              width: "100%",
              maxWidth: "2000px",
              justifyContent: "space-evenly",
            },
          }}
          className="Carousel"
          activeSlideIndex={activeSlide}
          onRequestChange={(index) => setActiveSlide(index)}
          activeSlideProps={{
            style: {
              border: "40px solid black",
            },
          }}
          forwardBtnProps={{
            children: (
              <FaArrowCircleRight size={50} className="direction-icon" />
            ),
            className: "direction-btn",
            style: {
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
              color: "white",
              marginLeft: "10px",
              marginRight: "10px",
            },
          }}
          backwardBtnProps={{
            children: (
              <FaArrowCircleLeft
                size={50}
                color="white"
                className="direction-icon"
              />
            ),
            className: "direction-btn",
            style: {
              display: "flex",
              alignSelf: "center",
              justifySelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
              marginRight: "10px",
            },
          }}
          itemsToShow={0}
          speed={300}
        >
          {content.posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              image={post.image}
              link={post.link}
            />
          ))}
        </Carousel>
      </div>
      <div id="Projects" />
    </div>
  );
};

export default Blog;
