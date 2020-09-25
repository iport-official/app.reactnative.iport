import React, { useState, useRef } from 'react';
import {
    Animated,
    Easing,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    View
} from 'react-native';
import LottieView from 'lottie-react-native';

interface MoreButtonProps extends TouchableWithoutFeedbackProps {
    size?: number
    color?: string
    right?: number
    onActive?(value: boolean): void
}

const MoreButton: React.FC<MoreButtonProps> = ({
    size = 80,
    color = '#fff',
    right,
    onActive,
    ...rest
}) => {

    const [active, setActive] = useState(false);

    const animation = useRef(new Animated.Value(0.4)).current;

    function handleOnPress() {
        setActive(!active);
        if (onActive)
            onActive(active);

        if(!active) {
            buttonCliked();
        }
        else buttonClikedOff();
    }

    const buttonCliked = () => {
        Animated.parallel([
            Animated.timing(animation, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ]).start();
    }

    const buttonClikedOff = () => {
        Animated.parallel([
            Animated.timing(animation, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        <TouchableWithoutFeedback
            onPress={handleOnPress}
            {...rest}>
            <View style={{ height: 50, width: 50, right: right !== undefined ? right : 0 }}>
                {/* <LottieView
                    resizeMode='contain'
                    source={ require('../../../assets/lottie/moreClose.json') }
                    style={{ height: size, position: "absolute", right: 0, bottom: 0 }}
                    progress={animation}
                    /> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MoreButton;
