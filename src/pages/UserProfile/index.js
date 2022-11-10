import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={10} />
          <Profile name="Shyana Melinda" desc="Product Designer" />
          <Gap height={14} />
          <List
            name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="edit-profile"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List
            name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="language"
          />
          <List
            name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="rate"
          />
          <List
            name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="help"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
