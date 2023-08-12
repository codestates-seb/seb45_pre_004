import React from 'react';
import { styled } from 'styled-components';
import tokens from '../styles/tokens.json'

const globalTokens = tokens.global;

export const LoginInputTopDesign = styled.input`
    width: 300px;
    height: 50px;
    border: ${globalTokens.regularWidth.value}px solid ${globalTokens.lightGreyColor.value};
    border-radius: ${globalTokens.regularRadius.value}px ${globalTokens.regularRadius.value}px 0 0;
    padding: 11px 25px;
    font-size: 16px;
    &::placeholder {
        color: ${globalTokens.lightGreyColor.value};
    }
`
export const LoginInputBottomDesign = styled(LoginInputTopDesign)`
    border-radius: 0 0 ${globalTokens.regularRadius.value}px ${globalTokens.regularRadius.value}px;
    border-top: none;
`
export const SignupInputDesign = styled(LoginInputTopDesign)`
    border-radius: ${globalTokens.smallRadius.value}px ${globalTokens.smallRadius.value}px ${globalTokens.smallRadius.value}px ${globalTokens.smallRadius.value}px;
`

export const Input = () => {
    return (
        <div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: '1fr', placeItems: 'center' } } >
            <LoginInputTopDesign type="text" placeholder='아이디를 입력해 주세요.'/>
            <LoginInputBottomDesign type="password" placeholder='비밀번호를 입력해 주세요.'/>
            <SignupInputDesign type="text" placeholder='이름을 입력해 주세요.'/>
        </div>
    );
};

export default Input;