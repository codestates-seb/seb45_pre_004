import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoImg from "../assets/images/logoImage.png";
import enter from "../assets/images/enter.png";
import exit from "../assets/images/exit.png";

import {
	Background,
	Wrapper,
	Title,
	Buttons,
	LogoLink,
	LogoImg,
	WhiteButton,
	PointButton,
	ExtraSmallButton,
	ExtraSmallPointButton,
	UserInfoText,
} from "../styles/header";
import { logoutService } from "../services/loginServices";
import { setIsLoginFalse } from "../redux/actions/isLoginAction";
import { removeUserInfo } from "../redux/actions/userInfoAction";

export default function Header() {
	const userInfo = useSelector((state)=>state.userInfoReducer);
	const location = useLocation();
	const isLoginPage =
		location.pathname === "/login" || location.pathname === "/signup";
	const isLogin = useSelector((state) => state.isLoginReducer);
	const browserWidth = useSelector((state) => state.browserWidthReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogoutButtonClickHandler = async () => {
		const response = await logoutService(userInfo.token);
		if(response===200) {
			//로그아웃 성공
			dispatch(removeUserInfo());
			dispatch(setIsLoginFalse());
			navigate('/')
		} else {

		}
	}

	return (
		<Background>
			<Wrapper>
				<LogoLink to="/">
					<LogoImg src={logoImg} alt="logo" />
					<br />
					<Title>STACK UNDERFLOW</Title>
				</LogoLink>
				<Buttons>
					{isLoginPage ? null : isLogin ? (
						browserWidth > 900 ? (
							<>
								<UserInfoText>안녕하세요! {userInfo.id}님</UserInfoText>
								<WhiteButton onClick={onLogoutButtonClickHandler}>로그아웃</WhiteButton>
							</>
						) : (
							<>
								<ExtraSmallPointButton onClick={onLogoutButtonClickHandler}>
									<img src={exit} alt="logout buttton" />
								</ExtraSmallPointButton>
							</>
						)
					) : browserWidth > 900 ? (
						<div>
							<Link to="/login">
								<PointButton>로그인</PointButton>
							</Link>
							<Link to="/signup">
								<WhiteButton>가입하기</WhiteButton>
							</Link>
						</div>
					) : (
						<div>
							<Link to="/login">
								<ExtraSmallButton>
									<img src={enter} alt="login buttton" />
								</ExtraSmallButton>
							</Link>
						</div>
					)}
				</Buttons>
			</Wrapper>
		</Background>
	);
}
