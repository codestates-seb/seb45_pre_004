import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logoImg from "../assets/images/logoImage.png";

import Nav from "../styles/navigator";
import { SmallCircleButtonDesign as Button } from "../atoms/Button";
import { ColorGradBlue as Gradient } from "../atoms/Button";
import tokens from "../styles/tokens.json";

const Navigator = () => {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	const [showNavigator, setShowNavigator] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const shouldShow = window.scrollY > 150;
			setShowNavigator(shouldShow);
		};

		// Call the handleScroll function on component mount to handle initial state
		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`Navigator ${showNavigator ? "show" : ""}`}>
			<Nav show={showNavigator}>
				<Link to="/">
					<img src={logoImg} alt="Logo" />
				</Link>
				{isLoggedIn ? (
					<Link to="/">
						<Button color={tokens.global.whiteColor.value}>
							<Gradient>로그아웃</Gradient>
						</Button>
					</Link>
				) : (
					<div>
						<Link to="/login">
							<Button color={tokens.global.pointColor.value}>로그인</Button>
						</Link>
						<Link to="/signup">
							<Button color={tokens.global.whiteColor.value}>
								<Gradient>가입</Gradient>
							</Button>
						</Link>
					</div>
				)}
			</Nav>
		</div>
	);
};

export default Navigator;
