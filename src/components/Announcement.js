import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #008080;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Friday Deal! Free Shipping on Orders over $99.
        </Container>
    );
};

export default Announcement;