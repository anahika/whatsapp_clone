import React from 'react'
import { Text, View } from 'react-native'
import { Message } from '../../types';
import moment from 'moment';
import styles from './styles';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } =props;

    const ismyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox,{
                  backgroundColor: ismyMessage() ? '#DCF8C5' : 'white',
                  marginLeft: ismyMessage() ? 50 : 0,
                  marginRight: ismyMessage() ? 0 :50,
                }
            ]   }>
                {!ismyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>
                        { (moment(message.createdAt).fromNow())}
                </Text>
            </View>
        </View>
        
    )
}

export default ChatMessage