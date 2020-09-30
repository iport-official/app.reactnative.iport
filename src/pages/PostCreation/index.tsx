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
                    multiline
                    description="100 - 300 palavras"
                    information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    placeholder="Descrição"
                />
                <InputField
                    placeholder="Nome"
                    information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </TextInputsView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
