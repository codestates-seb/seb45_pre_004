import { styled } from "styled-components";

const Nav = styled.div`
	position: fixed;
	top: ${(props) => (props.show ? "40px" : "-500px")};
	right: 10px;
	padding: 15px;
	z-index: 1;
	display: flex;
	width: 90px;
	height: 250px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 50px;
	background: rgba(255, 255, 255, 0.59);
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

	a {
		text-align: center;
		img {
			width: 80%;
			margin-top: 20px;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}
`;

export default Nav;
