import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View>
      <Header type="dark-profile" title="Nairobi Putri Hayza" />
      {/* <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text> */}
      {/* <ChatItem />
      <ChatItem />
      <ChatItem /> */}
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
