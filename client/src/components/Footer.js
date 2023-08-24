import logo from "../assets/images/githubLogo.png";
import { styled } from "styled-components";
import tokens from '../styles/tokens.json'

const { lightGreyColor, bodyText } = tokens.global;

const Wrapper = styled.footer`
  width: 100%;
  padding: 25px 20px;
  background-color: ${lightGreyColor.value};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: ${bodyText.value}px;
`;
const GithubHref = styled.a`
  margin: 1rem 1rem 0 0;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GithubLogoIcon = styled.img`
  object-fit: contain;
  width: 25px;
  margin-right: 7px;
`

export default function Footer() {
  return (
    <Wrapper>
      <div>
        Site design / logo © 2023 Stack Exchange Inc; user contributions
        licensed under CC BY-SA.
      </div>
      <LogoWrapper>
        <GithubHref href="https://github.com/raeseop">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          홍래섭
        </GithubHref>
        <GithubHref href="https://github.com/IncheonLee">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          이준석
        </GithubHref>
        <GithubHref href="https://github.com/kimsihyuong">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          김시형
        </GithubHref>
        <GithubHref href="https://github.com/3kiein">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          김세민
        </GithubHref>
        <GithubHref href="https://github.com/HyerimKimm">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          김혜림
        </GithubHref>
        <GithubHref href="https://github.com/HelloWorldDogs223">
          <GithubLogoIcon src={logo} alt="githubLogo" />
          이용혁
        </GithubHref>
      </LogoWrapper>
    </Wrapper>
  );
}
