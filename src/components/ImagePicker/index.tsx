import React, { useState } from 'react';
import { ImagePickerResult, TouchableOpacity } from 'react-native';
import * as _ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

import { ImageCircle, ImageViewCircle } from './styles';

interface ImagePickerProps {
    onPick(img: _ImagePicker.ImagePickerResult): void
}

const ImagePicker: React.FC<ImagePickerProps> = ({ onPick }) => {

    const [image, setImage] = useState('');

    const pickImage = async () => {
        try {
            let result = await _ImagePicker.launchImageLibraryAsync({
                mediaTypes: _ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });
            if(!result.cancelled) {
                setImage(result.uri);
                onPick(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ImageViewCircle>
            {!!image && <ImageCircle source={{ uri: image }} />}
            <MaterialIcons name="edit" size={50} color="white" style={{ position: 'absolute', opacity: 0.8 }} />
            <TouchableOpacity onPress={() => pickImage()} style={{ width: '100%', height: '100%', backgroundColor: '#0002' }}/>
        </ImageViewCircle>
    )
}

export default ImagePicker;
