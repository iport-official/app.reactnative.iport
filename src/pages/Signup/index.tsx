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

    useEffect(() => {
        setStatusBarStyle('light');
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

    const handlePhone = (text: string, index: number) => {
        const phones: any = user.phone;
        phones.splice(index, 0, text);

        setUser({ ...user, phone: phones });
    }

    const handleAddEmail = (text: string, index: number) => {
        const emails: any = user.additionalEmails;
        emails.splice(index, 0, text);

        setUser({ ...user, additionalEmails: emails });
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
            Phone: ${user.phone[0]}
            E-mail's: ${user.additionalEmails[0]}
            `
        );
    }

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedExtra = useRef(new Animated.Value(50)).current;

    const animateContainer = () => {
        Animated.sequence([
            Animated.timing(animatedOpacity, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            }),
            Animated.timing(animatedExtra, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        <ContainerSafeAreaView>
            <StatusBar translucent backgroundColor='#612e96' />
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
                            <ContactText>Contact</ContactText>
                            <TouchableOpacity activeOpacity={0.5}>
                                <FontAwesome5 name="plus-circle" size={24} color={colors.vividPurple} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <TextField
                                clear={clearField}
                                label='Phone'
                                keyboard='phone-pad'
                                onTextChange={(text: string) => handlePhone(text, 0)} />
                            <MinusButton activeOpacity={1}>
                                <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
                            </MinusButton>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <TextField
                                clear={clearField}
                                label='E-mail'
                                keyboard='email-address'
                                onTextChange={(text: string) => handleAddEmail(text, 0)} />
                            <MinusButton activeOpacity={1}>
                                <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
                            </MinusButton>
                        </View>
                    </ExtraFieldsContainer>
                    : <View />}
                <ButtonContainer style={{ marginTop: personalCheck || companyCheck ? 0 : 180 }}>
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
