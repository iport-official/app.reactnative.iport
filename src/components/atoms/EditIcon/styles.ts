import styled from 'styled-components/native';

export const EditContainer = styled.TouchableOpacity`
    height: ${(props: {size: number}) => props.size}px;
    width: ${(props: {size: number}) => props.size}px;

    justify-content: center;
    align-items: center;

    border-radius: ${(props: {size: number}) => props.size * 2}px;
`
