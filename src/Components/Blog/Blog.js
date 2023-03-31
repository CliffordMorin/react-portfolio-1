import React, { useState } from "react";
import BlogCard from "../UI/BlogCard/BlogCard";
import Carousel from "react-simply-carousel";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Blog = () => {
	const { i18n } = useTranslation();
	const [activeSlide, setActiveSlide] = useState(0);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

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

	i18n.language === "en"
		? (content = content.English)
		: (content = content.Japanese);

	const DesktopBlogCarousel = ({ content, activeSlide, setActiveSlide }) => {
		return (
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
		);
	};

	const MobileBlogList = ({ content }) => {
		return (
			<div id="BlogList">
				<h1 className="blog-post-list-heading">Blog Posts</h1>
				{content.posts.map((post, index) => (
					<a href={post.link} target="_blank" rel="noreferrer" key={post.link}>
						<h3 className="blog-post-list-title">{post.title}</h3>
					</a>
				))}
			</div>
		);
	};
	return (
		<AnimationOnScroll
			animateIn="animate__fadeIn"
			animateOut="animate__fadeOut"
			animateOnce={true}
			speed={4}
		>
			<Main>
				<div id="Blog">
					<Title>{content.mainTitle}</Title>
					{isDesktopOrLaptop ? (
						<DesktopBlogCarousel
							content={content}
							activeSlide={activeSlide}
							setActiveSlide={setActiveSlide}
						/>
					) : (
						<MobileBlogList content={content} />
					)}
				</div>
			</Main>
		</AnimationOnScroll>
	);
};

const Title = styled.h1`
	margin-top: 0px;
	margin-bottom: 50px;
`;

const Main = styled.div`
	background-color: var(--black);

	.projects-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.ReactModal__Overlay {
		background-color: var(--black) !important;
	}

	@media (max-width: 800px) {
		.project-icons {
			display: none !important;
		}
	}

	@media (min-width: 1300px) {
		.projects-container {
			width: 90%;
			margin: 60px auto;
			padding-bottom: 60px;
		}

		h1 {
			font-size: 2.5rem;
		}
	}

	#Blog {
		text-align: center;
		padding-bottom: 50px;
	}

	.direction-btn {
		display: flex !important;
		width: 60px;
		height: 60px;
		min-width: 60px;
		background-color: black;
		border-radius: 50%;
		justify-content: center;
	}

	.direction-icon {
		display: block;
	}

	#BlogList {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin-bottom: 32px;
		padding-left: 8px;
		padding-right: 8px;
	}

	@media (min-width: 2000px) {
		.direction-btn {
			margin: 20px;
		}
	}

	.blog-post-list-heading {
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.blog-post-list-title {
		color: var(--secondary-color);
		text-align: center;
	}
`;

export default Blog;
