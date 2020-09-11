import React, { useEffect, useState, useRef } from 'react';
import { Animated, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamsList } from '../../navigations/AppStack';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

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

import Checkbox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';
import TextField from '../../components/TextField';
import AuthSwitch from '../../components/AuthSwitch';
import { TouchableOpacity } from 'react-native-gesture-handler';

type DefaultSignupPageProps = StackScreenProps<
    AppStackParamsList,
    "SignupPage"
>

export default function SignupPage({ navigation }: DefaultSignupPageProps) {

    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        cpf: '',
        cnpj: '',
        cep: '',
        phone: [],
        additionalEmails: []
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const [personalCheck, setPersonalCheck] = useState(false);
    const [companyCheck, setCompanyCheck] = useState(false);

    const [clearField, setClearField] = useState(false);
    const [clearPassword, setClearPassword] = useState(false);

    let multEmails: any = [];
    let multPhones: any = [];

    useEffect(() => {
        setStatusBarStyle('light');

        setCantAddPhone(phones.length === 3);
        setCantAddEmail(emails.length === 3);

        multEmails = [...user.additionalEmails];
        multPhones = [...user.phone];
    });

    const handleEmail = (text: string) => {
        setUser({ ...user, email: text });
    }

    const handlePassword = (text: string) => {
        setUser({ ...user, password: text });
    }

    const handleConfirmPassword = (text: string) => {
        setConfirmPassword(text);
    }

    const handleName = (text: string) => {
        setUser({ ...user, name: text });
    }

    const handleCpfCnpj = (text: string) => {
        if (personalCheck) {
            setUser({ ...user, cpf: text });
        } else {
            setUser({ ...user, cnpj: text });
        }
    }

    const handleCep = (text: string) => {
        setUser({ ...user, cep: text });
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

    const isEmailValid = !!user.email && rules.emailRegex.test(user.email);
    const isPasswordValid = !!user.password && rules.passwordRegex.test(user.password);
    const isPasswordSame = user.password === confirmPassword;
    const isCpfValid = !!user.cpf && user.cpf.length === 11;
    const isCnpjValid = !!user.cnpj && user.cnpj.length === 14;

    const signupButtonPress = () => {
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

        alert(
            `
            E-mail: ${user.email}
            Password: ${user.password}
            Name: ${user.name}
            CPF/CNPJ: ${user.cpf || user.cnpj}
            CEP: ${user.cep}
            Phone: ${user.phone}
            E-mail's: ${user.additionalEmails}
            `
        );
    }

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedExtra = useRef(new Animated.Value(50)).current;

    const animateContainer = () => {
        Animated.sequence([
            Animated.timing(animatedOpacity, {
                toValue: 1,
                delay: 300,
                duration: 700,
                useNativeDriver: false
            }),
            Animated.timing(animatedExtra, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: false
            })
        ]).start();
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

    return (
        <ContainerSafeAreaView>
            <StatusBar translucent backgroundColor='#612e96' />
            <AuthSwitch isSignup />
            <SignupContainer contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                    clear={clearField}
                    label='E-mail'
                    keyboard='email-address'
                    onTextChange={(text: string) => handleEmail(text)} />
                <TextField
                    clear={clearPassword}
                    label='Password'
                    fieldType='password'
                    onTextChange={(text: string) => handlePassword(text)} />
                <TextField
                    clear={clearPassword}
                    label='Confirm password'
                    fieldType='password'
                    onTextChange={(text: string) => handleConfirmPassword(text)} />

                <SignupChoice>
                    <CheckboxContainer onTouchStart={() => {
                        setPersonalCheck(true);
                        setCompanyCheck(false);

                        if (!personalCheck) {
                            setUser({ ...user, cpf: user.cnpj });
                            if (!companyCheck) animateContainer();
                        }
                    }} >
                        <Checkbox checked={personalCheck} />
                        <CheckboxText>Personal</CheckboxText>
                    </CheckboxContainer>
                    <CheckboxContainer onTouchStart={() => {
                        setCompanyCheck(true);
                        setPersonalCheck(false);

                        if (!companyCheck) {
                            setUser({ ...user, cnpj: user.cpf });
                            if (!personalCheck) animateContainer();
                        }
                    }} >
                        <Checkbox checked={companyCheck} />
                        <CheckboxText>Company</CheckboxText>
                    </CheckboxContainer>
                </SignupChoice>

                {personalCheck || companyCheck
                    ? <ExtraFieldsContainer style={{ opacity: animatedOpacity, top: animatedExtra }}>
                        <TextField
                            clear={clearField}
                            label='Name'
                            onTextChange={(text: string) => handleName(text)} />
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
                            onTextChange={(text: string) => handleCep(text)} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between' }}>
                            <ContactText>Phones</ContactText>
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
                                    label='Phone'
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
                <ButtonContainer style={{ marginTop: personalCheck || companyCheck ? 0 : 100,
                    marginBottom: personalCheck || companyCheck ? 80 : 0 }}>
                    <FormButton
                        label='Sign up'
                        color={colors.grayPurple}
                        disableColor={colors.grayPurple + '88'}
                        ripple={colors.lightPurple}
                        disable={
                            !isEmailValid ||
                            !user.password ||
                            !user.name ||
                            (personalCheck ? !isCpfValid : !isCnpjValid) ||
                            !user.cep
                        }
                        onPress={signupButtonPress} />
                </ButtonContainer>
            </SignupContainer>
        </ContainerSafeAreaView>
    );
}
