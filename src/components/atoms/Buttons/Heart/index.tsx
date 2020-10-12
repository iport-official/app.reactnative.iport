import LottieView from 'lottie-react-native';
import React, { useState, useRef } from 'react'
import {
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    Animated,
    Easing,
    View
} from 'react-native';

interface HeartIconsProps extends TouchableWithoutFeedbackProps {
    size: number
    color: string
    right?: number
    onActive?(value: boolean): void
}

const HeartIcon: React.FC<HeartIconsProps> = ({
    onActive,
    size,
    right = 50,
    ...rest
}: HeartIconsProps) => {

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
            <View style={{ height: 50, width: 50, position: 'absolute', right: right }}>
                <LottieView
                    resizeMode='contain'
                    source={ require('../../../../assets/lottie/heart.json') }
                    style={{ height: size, position: "absolute", right: -27.5, bottom: -17.5 }}
                    progress={animation} />
            </View>
        </TouchableWithoutFeedback>

        //#endregion
    )
}

export default HeartIcon
