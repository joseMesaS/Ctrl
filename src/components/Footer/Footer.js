import React, {PureComponent} from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
    width:100vw;
    height: 4vh;
    background-color: #3a3a3a;
    position: fixed;
    bottom: 0;
    z-index: 1;
`;

class Footer extends PureComponent {



    render() {

        return (
            <FooterBar></FooterBar>
        )
    }
}

export default Footer;