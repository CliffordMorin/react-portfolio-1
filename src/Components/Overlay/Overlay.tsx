import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Index() {
	const divAnimation1 = useAnimation();
	const divAnimation2 = useAnimation();
	const divAnimation3 = useAnimation();
	const divAnimation4 = useAnimation();

	useEffect(() => {
		const DivSequence = async (number: number) => {
			let currentAnimation = divAnimation1;

			switch (number) {
				case 1:
					currentAnimation = divAnimation1;
					break;
				case 2:
					currentAnimation = divAnimation2;
					break;
				case 3:
					currentAnimation = divAnimation3;
					break;
				case 4:
					currentAnimation = divAnimation4;
					break;
			}
			await currentAnimation.start({ scale: 0 });
			await currentAnimation.start({ scale: 2 });
			await currentAnimation.start({ scale: 1 });
			await currentAnimation.start({
				x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
				y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),

				transition: {
					duration: 0.75,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
				y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),

				transition: {
					duration: 0.75,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				x:
					number === 1
						? -14
						: number === 2
						? -6
						: number === 3
						? 0
						: number === 4
						? 6
						: number === 5
						? 14
						: 0,

				y: 0,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				scale: 60,

				transition: {
					duration: 1.5,
				},
			});
		};

		DivSequence(1);
		DivSequence(2);
		DivSequence(3);
		DivSequence(4);
	});

	return (
		<Container>
			<LogoContainer animate={divAnimation1} initial={{ scale: 0, rotate: 45 }}>
				<Logo
					xmlns="http://www.w3.org/2000/svg"
					width="71"
					height="70"
					viewBox="0 0 71 70"
				>
					<g
						id="Rectangle_1"
						data-name="Rectangle 1"
						fill="none"
						stroke="#3CCF48"
						stroke-width="4"
					>
						<rect width="71" height="70" stroke="none" />
						<rect x="2" y="2" width="67" height="66" fill="none" />
					</g>
				</Logo>
			</LogoContainer>
			<LogoContainer
				animate={divAnimation2}
				initial={{ scale: 0, rotate: 45, x: -10 }}
			>
				<Logo
					xmlns="http://www.w3.org/2000/svg"
					width="71"
					height="70"
					viewBox="0 0 71 70"
				>
					<g
						id="Rectangle_1"
						data-name="Rectangle 1"
						fill="none"
						stroke="#3FD977"
						stroke-width="4"
					>
						<rect width="71" height="70" stroke="none" />
						<rect x="2" y="2" width="67" height="66" fill="none" />
					</g>
				</Logo>
			</LogoContainer>
			<LogoContainer
				animate={divAnimation3}
				initial={{ scale: 0, rotate: 45, x: -20 }}
			>
				<Logo
					xmlns="http://www.w3.org/2000/svg"
					width="71"
					height="70"
					viewBox="0 0 71 70"
				>
					<g
						id="Rectangle_1"
						data-name="Rectangle 1"
						fill="none"
						stroke="#43C396"
						stroke-width="4"
					>
						<rect width="71" height="70" stroke="none" />
						<rect x="2" y="2" width="67" height="66" fill="none" />
					</g>
				</Logo>
			</LogoContainer>
			<LogoContainer
				animate={divAnimation4}
				initial={{ scale: 0, rotate: 45, x: 10 }}
			>
				<Logo
					xmlns="http://www.w3.org/2000/svg"
					width="71"
					height="70"
					viewBox="0 0 71 70"
				>
					<g
						id="Rectangle_1"
						data-name="Rectangle 1"
						fill="none"
						stroke="#3FD9CE"
						stroke-width="4"
					>
						<rect width="71" height="70" stroke="none" />
						<rect x="2" y="2" width="67" height="66" fill="none" />
					</g>
				</Logo>
			</LogoContainer>
		</Container>
	);
}

export const Container = styled(motion.div)`
	z-index: 999;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	height: 100svh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-color: "var(--secondary-color)";
`;

export const LogoContainer = styled(motion.div)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
`;

export const Logo = styled(motion.svg)`
	position: absolute;
`;
