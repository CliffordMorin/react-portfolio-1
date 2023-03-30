import SocialLinks from "../UI/SocialLinks";
import styled from "styled-components";
const Footer = () => {
	return (
		<Main>
			<footer>
				<div className="footer-text">
					<span>
						<span
							style={{
								fontSize: "1rem",
								fontWeight: "bold",
							}}
						>
							Thanks for looking at my portfolio.
						</span>
						<span> </span>
						<span
							style={{
								fontSize: "1rem",
								fontWeight: "bold",
								color: "var(--secondary-color)",
							}}
						>
							Let's connect!
						</span>
					</span>
				</div>
				<SocialLinks />
			</footer>
		</Main>
	);
};

const Main = styled.footer`
	footer {
		background-color: var(--black);
		color: white;

		display: flex;
		justify-content: space-between;
		z-index: 10;
		position: absolute;
		width: 100%;
	}

	.footer-text {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: white;
		margin-left: 8px;
		user-select: none;
	}
	@media (max-width: 455px) {
		.footer-text {
			display: none;
			z-index: 10;
		}
	}
`;

export default Footer;
