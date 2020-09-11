import styled from 'styled-components/native';

const size = 150;

export const ImageViewCircle = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;

    height: ${size}px;
    width: ${size}px;
    margin-bottom: 20px;

    background-color: #612e9680;
    border-radius: 80px;
    overflow: hidden;
`

export const ImageCircle = styled.Image`
    position: absolute;

    height: 100%;
    width: 100%;
`
