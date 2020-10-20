import React from 'react';
import { ViewProps } from 'react-native';

import {
    ContentContainer,
    ContentDate,
    ContentDateContainer,
    ContentDescription,
    ContentEditContainer,
    ContentHorizontalLine,
    ContentImage,
    ContentTitle,
    ContentTitleContainer,
    ContentVerticalLine,
    HighlightContent,
    HighlightContentContainer,
    WarningText,
    WarningTextContainer
} from './styles';

import { ContentProxy } from '../../../pages/ProfileHighlight';
import EditIcon from '../../atoms/Buttons/EditIcon';

interface HighlightContentProps extends ViewProps {
    content: ContentProxy[];
    contentType: string;
    isEditMode: boolean;
    isCurrent: boolean;
    editPressed?(content: ContentProxy): void;
}

const ProfileHighlightContent: React.FC<HighlightContentProps> = ({
    editPressed,
    content,
    contentType = '',
    isEditMode = false,
    isCurrent = false,
    ...rest
}: HighlightContentProps): JSX.Element => {

    const getLabel = (type: string): string => {
        if(type === 'projects') {
            return 'projetos';
        } else if(type === 'experiences') {
            return 'experiências';
        }
        return 'conquistas';
    }

    let i = 0;

    return (
        <HighlightContentContainer { ...rest } >
            <HighlightContent>
                { content && content.length
                    ? content.map(c => {
                        return (
                            <ContentContainer
                                key={c.id}
                                style={{
                                    marginTop: i === 0 ? 80 : 0,
                                    marginBottom: i === content.length - 1 ? 70 : 0
                                }} >
                                { c.image ?
                                    <ContentImage
                                        style={{ marginTop: i === 0 ? 0 : 5 }}
                                        source={{ uri: `data:image/gif;base64,${c.image}` }} />
                                    : <></> }
                                <ContentTitleContainer>
                                    <ContentDateContainer>
                                        { contentType != 'achievements' ? <ContentDate>{ (c as {startDate: Date}).startDate }</ContentDate> : <></> }
                                        <ContentDate>{ c.endDate ? c.endDate : 'Em andamento' }</ContentDate>
                                    </ContentDateContainer>
                                    <ContentVerticalLine />
                                    <ContentTitle>{ c.title }</ContentTitle>
                                </ContentTitleContainer>
                                <ContentDescription>{ c.description }</ContentDescription>
                                { i++ !== content.length - 1 ?  <ContentHorizontalLine /> : <></> }
                                { isEditMode
                                    ? <ContentEditContainer
                                        style={{ height: i - 1 !== content.length - 1 ? '95%' : '104%' }}>
                                        <EditIcon
                                            size={30}
                                            iconSize={20}
                                            style={{
                                                backgroundColor: '#46266c',
                                                bottom: 5,
                                                right: 5,
                                                position: 'absolute'
                                            }}
                                            onPress={() => { if(editPressed) editPressed(c) }} />
                                    </ContentEditContainer>
                                    : <></> }
                            </ContentContainer>
                        )
                    })
                    : <WarningTextContainer>
                        <WarningText>{ `${isCurrent ? 'Você' : 'O usuário' } ainda não adicionou ${getLabel(contentType)}! ${isCurrent ? 'Adicione clicando no botão + no canto inferior direito de sua tela.' : 'Por favor, aguarde a atualização do perfil.'}` }</WarningText>
                    </WarningTextContainer>
                }
            </HighlightContent>
        </HighlightContentContainer>
    )
}

export default ProfileHighlightContent;
