import styled from 'styled-components/native'

const height = 400
const borderRadius = 30

export const ContainerView = styled.View`
    height: ${height}px;
    margin: 10px 10px 0 10px;
    border-radius: ${borderRadius}px;
    justify-content: center;
    align-items: center;
`

export const PostImage = styled.Image`
    position: absolute;
    width: 100%;
    height: ${height}px;
    border-radius: ${borderRadius}px;
`
