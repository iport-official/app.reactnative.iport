import styled from 'styled-components/native';

export const ContainerText = styled.Text`
    width: 150px;
    text-align: center;
    color: ${(props: {isActive?: boolean}) => props.isActive ? '#fff' : '#fff5'};
    font-size: ${(props: {isActive?: boolean}) => props.isActive ? '24px' : '20px'};
    font-family: Poppins_600SemiBold;
`
