import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    selectedContent: 'home' | 'expierence' | 'projects' | 'contact';
    setContent: Function;
}

export default function Header({ selectedContent, setContent }: HeaderProps) {
    return (<Container>
        <NameContainer>
            <Name>Aria Lopez</Name>
            <Title>Fullstack Engineer</Title>
        </NameContainer>
        <NavContainer>
            <NavItem 
                selected={selectedContent === 'home'}
                onClick={() => setContent('home')}
            >
                Home
            </NavItem>

            <NavItem 
                selected={selectedContent === 'expierence'}
                onClick={() => setContent('expierence')}
            >
                Expierence
            </NavItem>

            <NavItem 
                selected={selectedContent === 'projects'}
                onClick={() => setContent('projects')}
            >
                Projects
            </NavItem>

            <NavItem 
                selected={selectedContent === 'contact'}
                onClick={() => setContent('contact')}
            >
                Contact
            </NavItem>
        </NavContainer>
    </Container>);
}

const Container = styled.div`
    padding: 20px;
    max-width: 20%;
    height: 100%;
`;

const Name = styled.h1`
    margin: 0;
    font-weight: 400;
    font-size: 30px;
`;

const Title = styled.h3`
    margin: 0;
    font-weight: 300;
    font-size: 16px;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10%;
`;

const NavItem = styled.button<{ selected: boolean }>`
    background: transparent;
    color: ${props => props.selected ? '#edab26' : 'whitesmoke'};
    font-family: inherit;
    border: transparent;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0px;
    cursor: pointer;
    -webkit-transition: color 1s;
    -moz-transition:    color 1s;
    -ms-transition:     color 1s;
    -o-transition:      color 1s;
    transition:         color 1s;
    &:hover {
        color: #edab26;
    }
`;
