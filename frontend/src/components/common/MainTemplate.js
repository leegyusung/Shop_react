import React from 'react';
import Responsive from './Responsive';
import styled from 'styled-components';
import MainMenu from './MainMenu';

const MainBlock = styled(Responsive)``

const MainTemplate = () => {
    return (
        <MainBlock>
            <MainMenu></MainMenu>
        </MainBlock>
    );
};

export default MainTemplate;