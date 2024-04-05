import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function App() {
    const [landed, setLanded] = useState<boolean>(false);
    useEffect(() => {
        setLanded(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setLanded(false);
        }, 2000);
    }, [landed]);
    return (<Container>
            { landed ? 
            <Landing>
                <LandingTitle>Aria Lopez</LandingTitle>
                <LandingSubTitle>Fullstack Engineer</LandingSubTitle>
            </Landing> : null }
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

const rotate = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: ${rotate} 2s linear;
`;


const LandingTitle = styled.h1`
    margin: 0;
`;

const LandingSubTitle = styled.h3`
    margin: 0;
    color: gray;
`;
