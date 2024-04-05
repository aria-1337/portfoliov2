import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './components/Header';

export default function App() {
    // Landing
    const [landed, setLanded] = useState<boolean>(true); //false
    useEffect(() => {
        setLanded(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setLanded(false);
        }, 0); //1500
    }, [landed]);

    return (<Container>
            { landed ? 
            <Landing>
                <LandingTitle>Aria Lopez</LandingTitle>
                <LandingSubTitle>Fullstack Engineer</LandingSubTitle>
            </Landing> : (
                <ContentContainer>
                    <InnerContainer>
                        <Header />
                    </InnerContainer>
                </ContentContainer>
            )}
        </Container>); 
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

// Landing text + fade out
const fadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: 100%;
    animation: ${fadeOut} 1.5s linear;
`;


const LandingTitle = styled.h1`
    margin: 0;
`;

const LandingSubTitle = styled.h3`
    margin: 0;
    color: gray;
`;

// Main content container + options
const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 1.5s linear;
`;

const InnerContainer = styled.div`
    height: 90%;
    width: 90%;
    border: 1px solid whitesmoke;
`;
