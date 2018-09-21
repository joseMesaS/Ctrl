import React, {PureComponent} from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    width:5vw;
    height: 100vh;
    background-color: #232323;
    position: fixed;
    left: 0;
    z-index: 2;
`;

const NavButton = styled.button`
    border: none;
    outline: none;
    color: white;
    background-color: #232323;
    position: relative;
    width: 80px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: rotateZ(90deg);
    cursor: pointer;
    border-radius: 4px;
`;

class Navigation extends PureComponent {



    render() {

        return (
            <NavBar>
                <NavButton>Menu</NavButton>
            </NavBar>
        )
    }
}

export default Navigation;