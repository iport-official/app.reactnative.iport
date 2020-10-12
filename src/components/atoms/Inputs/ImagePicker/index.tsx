import React, { useState } from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as _ImagePicker from 'expo-image-picker';

import { ImageCircle, ImageViewCircle } from './styles';

interface ImagePickerProps extends ViewProps {
    size?: number;
    imageProp?: string | null;
    onPick(img: string | undefined): void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
    imageProp = '',
    onPick,
    ...rest
}: ImagePickerProps) => {

    const [image, setImage] = useState('');

    const pickImage = async () => {
        const result = await _ImagePicker.launchImageLibraryAsync({
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
