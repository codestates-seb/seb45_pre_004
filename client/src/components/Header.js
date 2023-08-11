import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logoImg from "../assets/images/logoImage.png";
import tokens from "../styles/tokens.json";
import { SmallButtonDesign as Button } from "../atoms/Button";
import {
	Background,
	Wrapper,
	Title,
	Buttons,
	LogoLink,
	LogoImg,
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
								<Button color={tokens.global.whiteColor.value} fontColor={tokens.global.pointColor.value}>로그아웃</Button>
							</LogoLink>
						) : (
							<>
								<Link to="/login">
									<Button color={tokens.global.pointColor.value}>로그인</Button>
								</Link>
								<Link to="/signup">
									<Button color={tokens.global.whiteColor.value} fontColor={tokens.global.pointColor.value}>
										가입하기
									</Button>
								</Link>
							</>
						)}
					</Buttons>
				)}
			</Wrapper>
		</Background>
	);
}
