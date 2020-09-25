import styled from 'styled-components/native';

const size = 60;

export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 10px;
    right: 10px;

    justify-content: center;
    align-items: center;

    height: ${size}px;
    width: ${size}px;

    border-radius: ${size * 2}px;
`
