import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Nairobi Putri Hayza" />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
