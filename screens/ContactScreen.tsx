import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import Users from '../data/Users'
import ContactListItems from '../components/ContactListItems ';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={Users}
        renderItem={({ item }) =><ContactListItems user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
