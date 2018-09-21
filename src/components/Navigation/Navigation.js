import React, {PureComponent} from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    width:2vw;
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
    left: 100%;
    transform: rotateZ(90deg);
    cursor: pointer;
    border-radius: 4px;
    transform-origin: left 50%;
`;

class Navigation extends PureComponent {
    state = {
        activeNav: false
    }

    handleNav = () => {
        this.setState({
            activeNav: !this.state.activeNav
        })
    }

    render() {
        const {activeNav} = this.props;

        return (
            <NavBar className={(this.state.activeNav && 'active') || (!this.state.activeNav && 'inactive')}>
                <NavButton onClick={this.handleNav}>Menu</NavButton>
            </NavBar>
        )
    }
}

export default Navigation;