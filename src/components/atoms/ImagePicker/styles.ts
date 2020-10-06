import styled from 'styled-components/native';

export const ImageViewCircle = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;

    height: ${(props: {size: number}) => props.size}px;
    width: ${(props: {size: number}) => props.size}px;
    margin-bottom: 20px;

    background-color: #612e9680;
    border-radius: ${(props: {size: number}) => props.size * 2}px;
    overflow: hidden;
`

export const ImageCircle = styled.Image`
    position: absolute;

    height: 100%;
    width: 100%;
`
