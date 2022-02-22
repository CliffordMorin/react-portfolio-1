import "../Projects/Projects.css";
import Fade from "react-reveal/Fade";
import BlogCard from "../UI/BlogCard/BlogCard";

const Blog = (props) => {
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
          title: "An Intro to Recursion",
          image: "https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
        },
      ],
    },
    Japanese: {
      mainTitle: "ブログ記事",
      posts: [
        {
          title: "Three Simple Tricks I Use To Make My Sites Load Faster",
          image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
          link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
        },
        {
          title: "An Intro to Recursion",
          image: "https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
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
              loopCount={1}
              loop={false}
              imageLoop={false}
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
