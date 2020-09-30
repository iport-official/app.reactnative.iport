import React from 'react'

import {
    ContainerSafeAreaView,
    TextInputsView
} from './styles'

import InputField from '../../components/molecules/InputField'
import InfoBox from '../../components/atoms/InfoBox'

import { colors } from '../../styles'

export default function PostCreationPage() {
    return (
        //#reigon JSx

        <ContainerSafeAreaView>
            <TextInputsView>
                <InputField
                    color={colors.livePurple}
                    multiline
                    validated
                    description="100 - 300 pala jakds "
                    information="A descrição deve falar sobre o que é essa tal vaga que você ta anunciando"
                    placeholder="Descrição"
                />
                <InputField
                    validated={false}
                    color={colors.livePurple}
                    placeholder="Nome"
                    information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </TextInputsView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
