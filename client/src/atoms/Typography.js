import React from 'react';
import { styled } from 'styled-components';
import tokens from '../styles/tokens.json'

const globalTokens = tokens.global;

export const BigHeadingTypo = styled.h1`
    font-size: ${globalTokens.value}px;
    font-weight: ${globalTokens.bold.value};
    color: ${(props)=>props.color||globalTokens.blackColor.value};
    background-color: ${(props)=>props.backgroundColor||globalTokens.whiteColor.value};
`

const Typography = () => {
    return (
        <BigHeadingTypo>
            This is Big Heading.
        </BigHeadingTypo>
    );
};

export default Typography;