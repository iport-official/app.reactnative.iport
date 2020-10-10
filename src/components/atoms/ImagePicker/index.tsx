import React, { useState } from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import * as _ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

import { ImageCircle, ImageViewCircle } from './styles';

interface ImagePickerProps extends ViewProps {
    size?: number;
    imageProp?: string;
    onPick(img: any): void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
    size = 150,
    imageProp = '',
    onPick,
    ...rest
}) => {

    const [image, setImage] = useState('');

    const pickImage = async () => {
        try {
            let result = await _ImagePicker.launchImageLibraryAsync({
                mediaTypes: _ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
                base64: true
            });
            if(!result.cancelled) {
                setImage(result.uri);
                onPick(result.base64);
            }
        } catch (error) {
            throw error;
        }
    }

    useState(() => {
        if(imageProp) {
            setImage(imageProp);
        }
    });

    return (
        <ImageViewCircle { ...rest } >
            {!!image && <ImageCircle source={{ uri: image }} />}
            <MaterialIcons
                name="edit"
                size={50}
                color="#ddd"
                style={{ position: 'absolute', opacity: 0.8 }} />
            <TouchableOpacity
                onPress={() => pickImage()}
                style={{ width: '100%', height: '100%', backgroundColor: '#0002' }}/>
        </ImageViewCircle>
    )
}

export default ImagePicker;
