import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { User } from "../../types"
import styles from './styles';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native'

export type ContactListItemsProps = {
    user: User;
}

const ContactListItems = (props: ContactListItemsProps) => {
    const { user } = props;
    const navigation = useNavigation();
 
    const onClick = () => {
        navigation.navigate('chatRoom',{
            // navigate to chat with this person
        });
    }
    
    return( 
        <TouchableWithoutFeedback onPress = {onClick}> 
          <View style={styles.container}>
          <View style={styles.leftContainer}>
              <Image source={{ uri: user.imageUri }} style={styles.avatar} />  
             <View style={styles.midContainer}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text numberOfLines={2} style={styles.status}>{user.status}</Text>             </View>
           </View>
           
        </View>
        </TouchableWithoutFeedback>

    )

};

export default ContactListItems;