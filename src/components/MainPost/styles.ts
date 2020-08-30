import styled from 'styled-components/native'

const height = 400
const borderRadius = 30

export const ContainerView = styled.View`
    height: ${height}px;
    margin: 10px 10px 0 10px;
    border-radius: ${borderRadius}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const MainPostImage = styled.Image`
    position: absolute;
    width: 100%;
    height: ${height}px;
    border-radius: ${borderRadius}px;
`

export const FilterView = styled.View`
    position: absolute;
    background: #00000040;
    border-radius: ${borderRadius}px;
    height: 100%;
    width: 100%;
`

export const ContentView = styled.View`
    flex: 1;
    height: ${height}px;
`

export const MainPostTextsView = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 20px;
`

export const TitleText = styled.Text`
    color: #fff;
    font-size: 25px;
    font-family: Roboto_700Bold;
`

export const DescriptionText = styled.Text`
    color: #fff;
    margin-top: 8px;
    font-size: 15px;
    font-family: Roboto_400Regular;
`

export const ProfileView = styled.View`
    margin-top: 15px;
    margin-left: 15px;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

export const ProfileDescriptionView = styled.View`
    margin-left: 8px;
`

export const NameText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-family: Poppins_600SemiBold;
`

export const PublishingDateText = styled.Text`
    color: #fff;
    font-size: 11px;
    font-family: Poppins_400Regular;
`

export const SideBarView = styled.View`
    height: 80%;
    width: 75px;
    border-radius: 15px;
    background: white;
`

// Roboto_700Bold
// Roboto_400Regular
