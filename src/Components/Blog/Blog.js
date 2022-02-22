import "../Projects/Projects.css";
import Fade from "react-reveal/Fade";
import BlogCard from "../UI/BlogCard/BlogCard";

const Blog = (props) => {
  let content = {
    English: {
      mainTitle: "Blog Posts",
      posts: [
        {
          title: "Three Simple Tricks I Use To Make My Sites Load Faster",
          image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
          link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
        },
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
          title: "this.concept = important",
          image: "https://media.giphy.com/media/26FLgGTPUDH6UGAbm/giphy.gif",
          link: "https://zachinjapan.com/This.Concept%20=%20important/",
        },
        {
          title: "count++ !== ++count",
          image: "https://media.giphy.com/media/3o6nV5TdYIA48G7VYI/giphy.gif",
          link: "https://zachinjapan.com/count++%20!=%20++count/",
        },
        {
          title: "Using Recursion to Insert Values Into a Sorted Binary Tree",
          image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
          link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
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
          image: "https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif",
          link: "https://zachinjapan.com/recursion/",
        },
        {
          title: "Higher Order Functions",
          image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
          link: "https://zachinjapan.com/Higher%20Order%20Functions/",
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
        {
          title: "Using Recursion to Insert Values Into a Sorted Binary Tree",
          image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
          link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
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
