import styled from 'styled-components/native';

export const ProfileHighlightsContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const ProfilePersonalInfoContainer = styled.View`
    margin: 20px 0;
    width: 98%;

    border-radius: 10px;
`

export const ModalContainer = styled.TouchableOpacity`
    position: absolute;
    height: 100%;
    width: 100%;

    background: #0006;
`

export const ModalContent = styled.View`
    top: 20%;
    left: 10%;

    justify-content: center;
    align-items: center;
    width: 80%;

    padding: 10px 15px;
    border-radius: 20px;

    background: #fff;
`

export const HighlightItemsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 98%;
    margin-bottom: 40px;
`
