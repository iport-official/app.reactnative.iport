import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonStyle = styled(RectButton)`
    margin-top: 50px;
    width: 220px;
    height: 40px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`
