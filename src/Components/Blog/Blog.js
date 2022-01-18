import "../Projects/Projects.css";
import Fade from "react-reveal/Fade";
import BlogCard from "../UI/BlogCard/BlogCard";

const Blog = (props) => {
  let content = {
    English: {
      mainTitle: "Blog Posts",
      posts: [
        {
          title: "An Intro to Recursion",
          image: "https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
        },
        {
          title: "The Coding Bootcamp Technical Interview",
          image: "https://media.giphy.com/media/MqcVPUx7cyL0Q/giphy.gif",
          link: "https://zachinjapan.com/bootcamp_coding_interview/",
        },
      ],
    },
    Japanese: {
      mainTitle: "ブログ記事",
      posts: [
        {
          title: "An Intro to Recursion",
          image: "https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
        },
        {
          title: "The Coding Bootcamp Technical Interview",
          image: "https://media.giphy.com/media/MqcVPUx7cyL0Q/giphy.gif",
          link: "https://zachinjapan.com/bootcamp_coding_interview/",
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="CodingChallenges Projects" id="Blog">
      <Fade>
        <h1>{content.mainTitle}</h1>
      </Fade>

      <Fade>
        <div className="projects-container">
          {content.posts.map((post) => (
            <BlogCard
              width={400}
              height={400}
              title={post.title}
              description={post.description}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
      </Fade>
      <div id="Projects" />
    </div>
  );
};

export default Blog;
