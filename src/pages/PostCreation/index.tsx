import React from 'react'

import {
    ContainerSafeAreaView,
    TextInputsView
} from './styles'

import InputField from '../../components/molecules/InputField'

import { colors } from '../../styles'

export default function PostCreationPage() {
    return (
        //#reigon JSx

        <ContainerSafeAreaView>
            <TextInputsView>
                <InputField
                    color={colors.livePurple}
                    multiline
                    validated={false}
                    description="100 - 300 palavras "
                    information="A descrição deve falar sobre o que é essa tal vaga que você ta anunciando"
                    errorMessage="Quantidade de caracteres excedida"
                    placeholder="Descrição"
                />
                <InputField
                    validated
                    color={colors.livePurple}
                    placeholder="Nome"
                    information="Lorem ipsum"
                />
            </TextInputsView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
