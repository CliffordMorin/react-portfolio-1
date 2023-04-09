import React, { useState } from "react";
import BlogCard from "../UI/BlogCard/BlogCard";
import Carousel from "react-simply-carousel";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

type Post = {
	title: string;
	image: string;
	link: string;
};

type LanguageContent = {
	[key: string]: {
		mainTitle: string;
		posts: Post[];
	};
};

interface DesktopBlogCarouselProps {
	content: LanguageContent;
	activeSlide: number;
	setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Blog: React.FC = () => {
	const { i18n } = useTranslation();
	const [activeSlide, setActiveSlide] = useState(0);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

	let content: LanguageContent = {
		English: {
			mainTitle: "Featured Blog Posts",
			// ... posts data
		},
		Japanese: {
			mainTitle: "ブログ記事",
			// ... posts data
		},
	};

	const selectedContent = content[i18n.language] || content["English"];

	const DesktopBlogCarousel: React.FC<DesktopBlogCarouselProps> = ({
		content,
		activeSlide,
		setActiveSlide,
	}) => {
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
					activeSlideIndex={activeSlide}
					onRequestChange={(index) => setActiveSlide(index)}
					// ... other props
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

	const MobileBlogList: React.FC<{ content: Content }> = ({ content }) => {
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
