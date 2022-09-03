import "../About/About.css";
import Skills from "../UI/Skills";
import { connect } from "react-redux";

import zach from "../../images/zachFinal4.png";
import { AnimationOnScroll } from "react-animation-on-scroll";


const About = (props) => {
	let content = {
		English: {
			title: "My Advantage",
			description:
			"I'm a self-taught software engineer, a self-taught Japanese speaker, and a professionally trained musician.",
			description2:
				"I fell in love with coding while I was an English teacher in Japan. Starting with HTML, CSS, and Javascript, I worked hard to improve my skills and now make complex full-stack applications with frameworks such as React, Vue, and Gatsby.",
			description3: "You can reach me at Zach.Stone.Developer@gmail.com",
			contact: "Contact",
		},
		Japanese: {
			title: "自己紹介",
			description:
				"こんにちは、ザックです。日本語が話せる独学のウェブ開発者です。",
			description2:
				"日本で英語を教えていた頃、コーディングが大好きになりました。 HTML、CSS、Javascriptだけから始めました。スキルを向上させるために一生懸命に勉強し、今ではReact、Vue、Gatsbyなどのフレームワークを使用して複雑なフルスタックアプリケーションを作成しています。",
			description3:
				"お問い合わせはZach.Stone.Developer@gmail.comまでメールでお問い合わせください。",
			contact: "お問い合わせ",
		},
	};

	props.language === "Japanese"
		? (content = content.Japanese)
		: (content = content.English);

	return (
		<>
			<div className="up-arrow-special"></div>
			<div
				style={{
					backgroundColor: "var(--primary-color)",
				}}
			>
				<div className="about" id="About">
                    
					<div className="about-left">
						<div className="picture">
							<img className="zach-img" src={zach} alt="zach" loading="lazy" />
                            
						</div>
					</div>

					<div className="about-right">
						<AnimationOnScroll
							animateIn="animate__fadeIn"
							animateOnce={true}
							offset={200}
							duration={3}
						>
							<h1
								style={{
									textAlign: "center",
								}}
								className="about-title"
							>
								{content.title}
							</h1>
							<p className="about-description">{content.description}</p>
							<p className="about-description">{content.description2}</p>
							<p className="about-description">{content.description3}</p>
						</AnimationOnScroll>
                        
						<AnimationOnScroll
							animateIn="animate__fadeIn"
							animateOnce={true}
							offset={250}
							duration={2}
						>
							<Skills language={props.language} />
						</AnimationOnScroll>
					</div>
				</div>
				<div className="down-arrow-special" />
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	language: state.language,
});
export default connect(mapStateToProps)(About);
