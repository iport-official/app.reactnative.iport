import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Animated, View } from 'react-native';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import * as _ImagePicker from 'expo-image-picker';
import { StackScreenProps } from '@react-navigation/stack';

import { AccountType, UserTypes } from '../../store/ducks/user/types';

import {
    ButtonContainerView,
    ContainerSafeAreaView,
    ExtraFieldsContainer,
    SignupChoice,
    SignupContainer
} from './styles';

import { AppStackParamsList } from '../../navigations/AppStack';
import FormButton from '../../components/atoms/FormButton';
import TextField from '../../components/atoms/TextField';
import ImagePicker from '../../components/atoms/ImagePicker';
import Checkmark from '../../components/atoms/Checkmark';
import ContactsList from '../../components/organisms/ContactsList';

import { colors } from '../../styles';

type DefaultSignupPageProps = StackScreenProps<
    AppStackParamsList,
    "SignupPage"
>

export default function SignupPage({ navigation }: DefaultSignupPageProps) {

    const dispatch = useDispatch()

    const [profileImage, setProfileImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accountType, setAccountType] = useState(AccountType.PERSONAL)
    const [username, setUsername] = useState('')
    const [cep, setCep] = useState('')
    const [phones, setPhones] = useState<string[]>([])
    const [emails, setEmails] = useState<string[]>([])
    const [cpf, setCpf] = useState('')
    const [cnpj, setCnpj] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('');

    const [personalCheck, setPersonalCheck] = useState(false);
    const [companyCheck, setCompanyCheck] = useState(false);

    const [clearField, setClearField] = useState(false);
    const [clearPassword, setClearPassword] = useState(false);

    async function onSignupButtonPress() {
        dispatch({
            type: UserTypes.REGISTER_REQUEST,
            payload: {
                profileImage,
                username,
                email,
                password,
                accountType
            }
        })
    }

    function handleOnPersonalCheck() {
        setPersonalCheck(true);
        setCompanyCheck(false);
        if (!personalCheck) {
            setAccountType(AccountType.PERSONAL)
            if (!personalCheck)
                animateContainer();
        }
    }

    function handlOnCompayCheck() {
        setCompanyCheck(true);
        setPersonalCheck(false);
        if (!companyCheck) {
            setAccountType(AccountType.COMPANY)
            if (!personalCheck)
                animateContainer();
        }
    }

    //#region Animations

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedExtra = useRef(new Animated.Value(50)).current;

    const animateContainer = () => {
        Animated.sequence([
            Animated.timing(animatedOpacity, {
                toValue: 1,
                delay: 300,
                duration: 400,
                useNativeDriver: false
            }),
            Animated.timing(animatedExtra, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start();
    }

    //#endregion

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <StatusBar
                translucent
                style="light"
                backgroundColor='#612e96'
            />
            <SignupContainer
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ImagePicker onPick={setProfileImage} />
                <TextField
                    clear={clearField}
                    placeholder='E-mail'
                    keyboard='email-address'
                    onTextChange={setEmail} />
                <TextField
                    clear={clearPassword}
                    placeholder='Senha'
                    fieldType='password'
                    onTextChange={setPassword} />
                <TextField
                    clear={clearPassword}
                    placeholder='Confirmar senha'
                    fieldType='password'
                    onTextChange={setConfirmPassword} />
                <SignupChoice>
                    <Checkmark
                        checked={personalCheck}
                        onCheck={handleOnPersonalCheck}
                        title="Pessoa"
                    />
                    <Checkmark
                        checked={companyCheck}
                        onCheck={handlOnCompayCheck}
                        title="Empresa"
                    />
                </SignupChoice>

                {personalCheck || companyCheck
                    ? <ExtraFieldsContainer style={{ opacity: animatedOpacity, top: animatedExtra }}>
                        <TextField
                            clear={clearField}
                            placeholder='Nome de usuário'
                            onTextChange={setUsername}
                        />
                        <TextField
                            clear={clearField}
                            placeholder={personalCheck ? 'CPF' : 'CNPJ'}
                            keyboard='number-pad'
                            length={personalCheck ? 11 : 14}
                            onTextChange={personalCheck ? setCpf : setCnpj}
                        />
                        <TextField
                            clear={clearField}
                            placeholder='CEP'
                            keyboard='number-pad'
                            length={8}
                            onTextChange={setCep}
                        />

                        <ContactsList
                            title="Telefones"
                            contactTypes={[
                                "Pessoal",
                                "Empresa"
                            ]}
                            placeholder="Telefone"
                            onUpdateContacts={(contacts) => { }}
                        />

                        <ContactsList
                            title="E-mails"
                            contactTypes={[
                                "Pessoal",
                                "Empresa"
                            ]}
                            placeholder="Email"
                            onUpdateContacts={(contacts) => { }}
                        />

                    </ExtraFieldsContainer>
                    : <View />}
                {(personalCheck || companyCheck) && 
                    <ButtonContainerView
                        checked={personalCheck || companyCheck}>
                        <FormButton
                            label='Sign up'
                            color={colors.grayPurple}
                            disableColor={colors.grayPurple + '88'}
                            ripple={colors.lightPurple}
                            disable={
                                !password
                                || !username}
                            onPress={onSignupButtonPress} />
                </ButtonContainerView>}
            </SignupContainer>
        </ContainerSafeAreaView>

        //#endregion
    )

}

//#region Old code

    // const handlePhone = (text: string, index: number, action: boolean = false) => {
    //     const phones = [...additionalPhones];
    //     phones.splice(index, 0, text);

    //     const toSet = phones[index];

    //     if (action && text) {
    //         const userPhones: any = [...user.phone];
    //         if (userPhones[index]) {
    //             userPhones.splice(index, 1, toSet);
    //         } else {
    //             userPhones.splice(index, 0, toSet);
    //         }
    //         setTimeout(() => {
    //             setUser({ ...user, phone: userPhones });
    //         }, 10);
    //     }
    // }

    // const handleAddEmail = (text: string, index: number, action: boolean = false) => {
    //     const emails: any = [...user.additionalEmails];
    //     emails.splice(index, 0, text);

    //     const toSet: any = emails[index];

    //     if (action && text) {
    //         const userEmails: any = [...user.additionalEmails];
    //         if (userEmails[index]) {
    //             userEmails.splice(index, 1, toSet);
    //         } else {
    //             userEmails.splice(index, 0, toSet);
    //         }
    //         setUser({ ...user, additionalEmails: userEmails });
    //     }
    // }

    {/* <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between'
}}>
    <ContactText>Telefones</ContactText>
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => { setPhones([...phones, '']) }}
        disabled={cantAddPhone}>
        <FontAwesome5
            name="plus-circle"
            size={24}
            color={colors.vividPurple}
            style={{ opacity: cantAddPhone ? 0.5 : 1 }} />
    </TouchableOpacity>
</View>
{phones.map((p: any, i: number) =>
    <View
        style={{
            width: '100%',
            alignItems: 'center'
        }}
        key={i}>
        <TextField
            clear={clearField}
            label='Telefone'
            keyboard='phone-pad'
            textValue={multPhones[i]}
            onFieldBlur={(text: string) => handlePhone(text, i, true)}
            onTextChange={(text: string) => handlePhone(text, i)} />
        {i === phones.length - 1 && i !== 0 ?
            <MinusButton
                activeOpacity={1}
                onPress={() => removePhone(i)}
            >
                <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
            </MinusButton> : <View />
        }
    </View>
)
}
<View style={{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between'
}}>
    <ContactText>E-mail's</ContactText>
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => { setEmails([...emails, '']) }}
        disabled={cantAddEmail}>
        <FontAwesome5
            name="plus-circle"
            size={24}
            color={colors.vividPurple}
            style={{ opacity: cantAddEmail ? 0.5 : 1 }} />
    </TouchableOpacity>
</View>
{emails.map((e: any, i: number) =>
    <View style={{
        width: '100%',
        alignItems: 'center'
    }}
        key={i}>
        <TextField
            clear={clearField}
            label='E-mail'
            keyboard='email-address'
            textValue={multEmails[i]}
            onFieldBlur={(text: string) => handleAddEmail(text, i, true)}
            onTextChange={(text: string) => handleAddEmail(text, i)} />
        {i === emails.length - 1 && i !== 0 ?
            <MinusButton
                activeOpacity={1}
                onPress={() => removeEmail(i)}>
                <FontAwesome5
                    name="minus-circle"
                    size={24}
                    color={colors.vividPurple} />
            </MinusButton> : <View />
        }
    </View>
)
} */}

    //#endregion
