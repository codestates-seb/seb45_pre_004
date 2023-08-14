import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logoImg from "../assets/images/logoImage.png";

import {
	Background,
	Wrapper,
	Title,
	Buttons,
	LogoLink,
	LogoImg,
	WhiteButton,
	PointButton,
} from "../styles/header";

export default function Header() {
	const location = useLocation();
	const isLoginPage =
		location.pathname === "/login" || location.pathname === "/signup";
	const isLogin = useSelector((state) => state.authReducer);

	return (
		<Background>
			<Wrapper>
				<LogoLink to="/">
					<LogoImg src={logoImg} alt="logo" />
					<br />
					<Title>STACK UNDERFLOW</Title>
				</LogoLink>
				{!isLoginPage && (
					<Buttons>
						{isLogin ? (
							<LogoLink to="/">
								<WhiteButton>로그아웃</WhiteButton>
							</LogoLink>
						) : (
							<>
								<Link to="/login">
									<PointButton>
										로그인
									</PointButton>
								</Link>
								<Link to="/signup">
									<WhiteButton
									>
										가입하기
									</WhiteButton>
								</Link>
							</>
						)}
					</Buttons>
				)}
			</Wrapper>
		</Background>
	);
}
