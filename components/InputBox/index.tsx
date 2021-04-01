import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react'

const InputBox = () => {

    const [ message, setMessage ] = useState( ' ');

    const onMicrophonePress = () => {
          console.log('microphone');
    }

    const onSendPress = () => {
        console.log('microphone');
        // send a message to the backend
    }

    const onClick = () => {
        if(!message) {
            onMicrophonePress();
        }
        else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
               <FontAwesome5 name="laugh-beam" size={24} color="grey" />
               <TextInput 
                  placeholder = {"Type a message"}
                  style={styles.textInput}
                   multiline
                   value={message}
                   onChangeText={setMessage}
               />
               <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
               {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}

            </View>
            <TouchableOpacity onPress={onClick}>
                <View style={styles.buttonContainer}> 
                    {!message 
                    ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                    : <MaterialIcons name="send" size={28} color ="white" />
                    }
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;