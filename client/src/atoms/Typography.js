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

export const SmallHeadingTypo = styled.h3`
    font-size: ${globalTokens.smallHeading.value}px;
    font-weight: ${globalTokens.bold.value};
    color: ${(props)=>props.color||globalTokens.blackColor.value};
    background-color: ${(props)=>props.backgroundColor||globalTokens.whiteColor.value};
`

export const BodyTextTypo = styled.div`
    font-size: ${globalTokens.bodyText.value}px;
    color: ${(props)=>props.color||globalTokens.blackColor.value};
    background-color: ${(props)=>props.backgroundColor||globalTokens.whiteColor.value};
`

const Typography = ({color, backgroundColor}) => {
    return (
    <>
        <BigHeadingTypo color={color} backgroundColor={backgroundColor}>
            This is Big Heading.
        </BigHeadingTypo>
        <SmallHeadingTypo color={color} backgroundColor={backgroundColor}>
            THis is Small Heading.
        </SmallHeadingTypo>
        <BodyTextTypo color={color} backgroundColor={backgroundColor}>
            This is Body Text.
        </BodyTextTypo>
    </>
    );
};

export default Typography;