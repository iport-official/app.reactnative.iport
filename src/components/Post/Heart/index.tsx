import React, { useState, useRef, useEffect } from 'react'
import {
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    Animated,
    Easing
} from 'react-native';
import LottieView from 'lottie-react-native';

interface HeartIconsProps extends TouchableWithoutFeedbackProps {
    size: number
    color: string
    onActive?(value: boolean): void
}

const HeartIcon: React.FC<HeartIconsProps> = ({ onActive, size, color, onPress, ...rest }) => {
    const [active, setActive] = useState(false);

    const animation = useRef(new Animated.Value(0.4)).current;

    function handleOnPress() {
        setActive(!active);
        if (onActive)
            onActive(active);

        if(!active) {
            likeCliked();
        }
        else likeClikedOff();
    }

    const likeCliked = () => {
        Animated.parallel([
            Animated.timing(animation, {
                toValue: 0.9,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ]).start();
    }

    const likeClikedOff = () => {
        Animated.parallel([
            Animated.timing(animation, {
                toValue: 0.4,
                duration: 0,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        //#region JSX

        <TouchableWithoutFeedback
            onPress={handleOnPress}
            {...rest}>
            <LottieView resizeMode='contain' source={ require('../../../assets/lottie/heart.json') }
                style={{ height: size, position: "absolute", right: 0 }} progress={animation} />
        </TouchableWithoutFeedback>

        //#endregion
    )
}

export default HeartIcon
