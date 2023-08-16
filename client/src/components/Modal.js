import React from 'react';
import { styled } from 'styled-components';
import tokens from '../styles/tokens.json'
import { RegularButtonDesign } from '../atoms/Button';
import { BodyTextTypo } from '../atoms/Typography';

const globalTokens = tokens.global;

export const ModalBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    opacity: ${(props)=>props.isModalOpen?`1`:`0`};
    visibility: ${(props)=>props.isModalOpen?'visible':'hidden'};
`
export const ModalContainer = styled.section`
    width: 30vw;
    min-width: 250px;
    min-height: 200px;
    background-color: ${globalTokens.whiteColor.value};
    opacity: ${(props)=>props.isModalOpen?`1`:`0`};
    visibility: ${(props)=>props.isModalOpen?'visible':'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
    border-radius: 20px;
`
export const ModalText = styled(BodyTextTypo)`
    margin-top: 24px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    text-align: start;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModalButton = styled(RegularButtonDesign)`
    width: 80%;
    height: 60px;
    margin-bottom: 24px;
`

const Modal = ({isModalOpen}) => {
    return (
        <ModalBackdrop isModalOpen={isModalOpen}>
            <ModalContainer isModalOpen={isModalOpen}>
                <ModalText>This is Modal!</ModalText>
                <ModalButton 
                    fontColor={globalTokens.whiteColor.value} 
                    color={globalTokens.pointColor.value}>
                        버튼
                </ModalButton>
            </ModalContainer>
        </ModalBackdrop>
    );
};

export default Modal;