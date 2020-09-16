import React, { useEffect, useState, useRef } from 'react';
import { Animated, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamsList } from '../../navigations/AppStack';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import * as _ImagePicker from 'expo-image-picker';

import {
    ButtonContainer,
    CheckboxContainer,
    CheckboxText,
    ContactText,
    ContainerSafeAreaView,
    ExtraFieldsContainer,
    MinusButton,
    SignupChoice,
    SignupContainer
} from './styles';

import { colors } from '../../styles';
import { rules } from '../../utils';

import Checkbox from '../../components/atoms/Checkbox';
import FormButton from '../../components/atoms/FormButton';
import TextField from '../../components/atoms/TextField';
import ImagePicker from '../../components/atoms/ImagePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import * as SecureStore from 'expo-secure-store';
import { RegisterProxy } from '../../services/User/register.proxy';
import { LoginPayload } from '../../services/User/login.payload';
import { LoginProxy } from '../../services/User/login.proxy';

type DefaultSignupPageProps = StackScreenProps<
    AppStackParamsList,
    "SignupPage"
>

export default function SignupPage({ navigation }: DefaultSignupPageProps) {

    const [user, setUser] = useState({
        profileImage: '',
        email: '',
        password: '',
        accountType: '',
        username: '',
        cpf: '',
        cnpj: '',
        cep: '',
        phone: [],
        additionalEmails: []
    });

    useEffect(() => {
        setStatusBarStyle('light');

        setCantAddPhone(phones.length === 3);
        setCantAddEmail(emails.length === 3);

        multEmails = [...user.additionalEmails];
        multPhones = [...user.phone];
    }, []);

    const [image, setImage] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [personalCheck, setPersonalCheck] = useState(false);
    const [companyCheck, setCompanyCheck] = useState(false);

    const [clearField, setClearField] = useState(false);
    const [clearPassword, setClearPassword] = useState(false);

    let multEmails: any = [];
    let multPhones: any = [];

    const handleCpfCnpj = (text: string) => {
        if (personalCheck) {
            setUser({ ...user, cpf: text });
        } else {
            setUser({ ...user, cnpj: text });
        }
    }

    const handlePhone = (text: string, index: number, action: boolean = false) => {
        const phones: any = [...user.phone];
        phones.splice(index, 0, text);

        const toSet: any = phones[index];

        if(action && text) {
            const userPhones: any = [...user.phone];
            if(userPhones[index]) {
                userPhones.splice(index, 1, toSet);
            } else {
                userPhones.splice(index, 0, toSet);
            }
            setTimeout(() => {
                setUser({ ...user, phone: userPhones });
            }, 10);
        }
    }

    const handleAddEmail = (text: string, index: number, action: boolean = false) => {
        const emails: any = [...user.additionalEmails];
        emails.splice(index, 0, text);

        const toSet: any = emails[index];

        if(action && text) {
            const userEmails: any = [...user.additionalEmails];
            if(userEmails[index]) {
                userEmails.splice(index, 1, toSet);
            } else {
                userEmails.splice(index, 0, toSet);
            }
            setUser({ ...user, additionalEmails: userEmails });
        }
    }

    const [phones, setPhones]  = useState([ 0 ]);
    const phoneArray: any = [];

    const newPhone = () => {
        phoneArray.push( ...phones, phones.length);
        setPhones(phoneArray);
    }

    const removePhone = (index: number) => {
        const toSave: any = user.phone.filter((p: string, i: number) => i !== index);
        setUser({ ...user, phone: toSave });

        const selectedPhones: any = phones.splice(index, 1);
        setPhones(phones.filter((p: number) => p !== selectedPhones[0]));
    }

    const [cantAddPhone, setCantAddPhone] = useState(false);
    const [cantAddEmail, setCantAddEmail] = useState(false);

    const [emails, setEmails]  = useState([ 0 ]);
    const emailArray: any = [];

    const newEmail = () => {
        emailArray.push( ...emails, emails.length);
        setEmails(emailArray);
    }

    const removeEmail = (index: number) => {
        const toSave: any = user.additionalEmails.filter((e: string, i: number) => i !== index);
        setUser({ ...user, additionalEmails: toSave });

        const selectedEmails: any = emails.splice(index, 1);
        setEmails(emails.filter((e: number) => e !== selectedEmails[0]));
    }

    const isEmailValid = !!user.email && rules.emailRegex.test(user.email);
    const isPasswordValid = !!user.password && rules.passwordRegex.test(user.password);
    const isPasswordSame = user.password === confirmPassword;
    const isCpfValid = !!user.cpf && user.cpf.length === 11;
    const isCnpjValid = !!user.cnpj && user.cnpj.length === 14;

    const signupButtonPress = async () => {
        if (!isPasswordValid || !isPasswordSame) {
            setClearPassword(true);
            setUser({ ...user, password: '' });
            setConfirmPassword('');
            if (!isPasswordValid) {
                alert('Password: \nMin 6 characters with at least one capital letter, one lower case and one number');
            } else {
                alert('Password fields does not match! Enter your password again.');
            }

            setTimeout(() => setClearPassword(false), 10);

            return;
        }

        try {
            const formdata = new FormData();
            formdata.append('profileImage', image);
            formdata.append('username', user.username);
            formdata.append('email', user.email);
            formdata.append('password', user.password);
            formdata.append('accountType', user.accountType);

            const signupResponse = await api.post<RegisterProxy>('/users', formdata, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if(signupResponse.status === 201) {
                // const loginPayload: LoginPayload = {
                //     email: user.email,
                //     password: user.password
                // }
                // const loginResponse = await api.post<LoginProxy>('/users/login', loginPayload);
                // if(loginResponse.status === 201) {
                //     await SecureStore.setItemAsync('access_token', loginResponse.data.access_token);
                //     navigation.navigate("Drawer", {
                //         MainPage: undefined,
                //         ProfilePage: undefined
                //     });
                //     return;
                // }
                alert('Ocorreu um erro! Por favor, dirija-se à página de Login e tente entrar em sua conta.');
            }
            else {
                alert('Ocorreu um erro! Por favor, cheque suas credencias e tente novamente.');
            }
        } catch (error) {
            console.log(error);
        }
    }

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

    return (
        <ContainerSafeAreaView>
            <StatusBar translucent backgroundColor='#612e96' />
            <SignupContainer contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImagePicker onPick={(img: any) => setImage(img)} />
                <TextField
                    clear={clearField}
                    label='E-mail'
                    keyboard='email-address'
                    onTextChange={(text: string) => setUser({ ...user, email: text })} />
                <TextField
                    clear={clearPassword}
                    label='Senha'
                    fieldType='password'
                    onTextChange={(text: string) => setUser({ ...user, password: text })} />
                <TextField
                    clear={clearPassword}
                    label='Confirmar senha'
                    fieldType='password'
                    onTextChange={setConfirmPassword} />

                <SignupChoice>
                    <CheckboxContainer onTouchStart={() => {
                        setPersonalCheck(true);
                        setCompanyCheck(false);

                        if (!personalCheck) {
                            setUser({ ...user, cpf: user.cnpj, cnpj: '', accountType: 'PERSONAL' });
                            if (!companyCheck) animateContainer();
                        }
                    }} >
                        <Checkbox checked={personalCheck} />
                        <CheckboxText>Pessoa</CheckboxText>
                    </CheckboxContainer>
                    <CheckboxContainer onTouchStart={() => {
                        setCompanyCheck(true);
                        setPersonalCheck(false);

                        if (!companyCheck) {
                            setUser({ ...user, cnpj: user.cpf, cpf: '', accountType: 'COMPANY' });
                            if (!personalCheck) animateContainer();
                        }
                    }} >
                        <Checkbox checked={companyCheck} />
                        <CheckboxText>Empresa</CheckboxText>
                    </CheckboxContainer>
                </SignupChoice>

                {personalCheck || companyCheck
                    ? <ExtraFieldsContainer style={{ opacity: animatedOpacity, top: animatedExtra }}>
                        <TextField
                            clear={clearField}
                            label='Nome'
                            onTextChange={(text: string) => setUser({ ...user, username: text })} />
                        <TextField
                            clear={clearField}
                            label={personalCheck ? 'CPF' : 'CNPJ'}
                            keyboard='number-pad'
                            length={personalCheck ? 11 : 14}
                            onTextChange={(text: string) => handleCpfCnpj(text)} />
                        <TextField
                            clear={clearField}
                            label='CEP'
                            keyboard='number-pad'
                            length={8}
                            onTextChange={(text: string) => setUser({ ...user, cep: text })} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between' }}>
                            <ContactText>Telefones</ContactText>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => newPhone()}
                                disabled={cantAddPhone}>
                                <FontAwesome5 name="plus-circle" size={24} color={colors.vividPurple}
                                    style={{ opacity: cantAddPhone ? 0.5 : 1 }}/>
                            </TouchableOpacity>
                        </View>
                        { phones.map((p: any, i: number) =>
                            <View style={{ width: '100%', alignItems: 'center' }} key={i}>
                                <TextField
                                    clear={clearField}
                                    label='Telefone'
                                    keyboard='phone-pad'
                                    textValue={multPhones[i]}
                                    onFieldBlur={(text: string) => handlePhone(text, i, true)}
                                    onTextChange={(text: string) => handlePhone(text, i)} />
                                { i === phones.length - 1 && i !== 0 ?
                                    <MinusButton activeOpacity={1} onPress={() => removePhone(i)}>
                                        <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
                                    </MinusButton> : <View/>
                                }
                            </View>
                            )
                        }
                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between' }}>
                            <ContactText>E-mail's</ContactText>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => newEmail()}
                                disabled={cantAddEmail}>
                                <FontAwesome5 name="plus-circle" size={24} color={colors.vividPurple}
                                    style={{ opacity: cantAddEmail ? 0.5 : 1 }} />
                            </TouchableOpacity>
                        </View>
                        { emails.map((e: any, i: number) =>
                            <View style={{ width: '100%', alignItems: 'center' }} key={i}>
                                <TextField
                                    clear={clearField}
                                    label='E-mail'
                                    keyboard='email-address'
                                    textValue={multEmails[i]}
                                    onFieldBlur={(text: string) => handleAddEmail(text, i, true)}
                                    onTextChange={(text: string) => handleAddEmail(text, i)} />
                                { i === emails.length - 1 && i !== 0 ?
                                    <MinusButton activeOpacity={1} onPress={() => removeEmail(i)}>
                                        <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
                                    </MinusButton> : <View />
                                }
                            </View>
                            )
                        }
                    </ExtraFieldsContainer>
                    : <View />}
                {(personalCheck || companyCheck) && <ButtonContainer style={{ marginTop: personalCheck || companyCheck ? 0 : 100,
                    marginBottom: personalCheck || companyCheck ? 80 : 0 }}>
                    <FormButton
                        label='Sign up'
                        color={colors.grayPurple}
                        disableColor={colors.grayPurple + '88'}
                        ripple={colors.lightPurple}
                        disable={
                            !isEmailValid ||
                            !user.password ||
                            !user.username //||
                            // (personalCheck ? !isCpfValid : !isCnpjValid) ||
                            // !user.cep
                        }
                        onPress={signupButtonPress} />
                </ButtonContainer>}
            </SignupContainer>
        </ContainerSafeAreaView>
    );
}
