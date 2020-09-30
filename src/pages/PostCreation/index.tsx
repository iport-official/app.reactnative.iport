import React from 'react'

import {
    ContainerSafeAreaView,
    TextInputsView
} from './styles'

import InputField from '../../components/atoms/InputField'

export default function PostCreationPage() {
    return (
        //#reigon JSx

        <ContainerSafeAreaView>
            <TextInputsView>
                <InputField
                    description="100 - 300 palavras"
                    information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    placeholder="E-mail"
                />
                <InputField
                    placeholder="Nome"
                />
            </TextInputsView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
