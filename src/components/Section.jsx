import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, touchless, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <Title>{ title }</Title>
                    <p>{ description } <DescriptionLink href="#">{ touchless }</DescriptionLink></p>
                </ItemText>
            </Fade>

            <Buttons>
            <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                            { rightBtnText &&
                                <RightButton>
                                {rightBtnText}
                                </RightButton>
                            } 
                    </ButtonGroup>
                </Fade>
                    <DownArrow src="../../img/arrow.svg" />
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../img/model-s.jpg');
    background-image: ${props => `url("/img/${props.bgImage}")`};
    display: flex;
    flex-direction: column; 
    justify-content: space-between;  
    align-items: center;   
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
`
const DescriptionLink = styled.a`
    color: inherit;
    text-underline-position: under;

    &:hover {
        font-weight: 500;
    }    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
  
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.button`
    border: none;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 25px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    margin-bottom: 2%;
`
