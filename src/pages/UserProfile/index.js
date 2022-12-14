import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={10} />
          {profile.fullName.length > 0 && (
            <Profile
              name={profile.fullName}
              desc={profile.profession}
              photo={profile.photo}
            />
          )}
          <Gap height={14} />
          <List
            name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="edit-profile"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List
            name="Language"
            desc="Last Update Yesterday"
            type="next"
            icon="language"
          />
          <List
            name="Give Us Rate"
            desc="Last Update Yesterday"
            type="next"
            icon="rate"
          />
          <List
            name="Help Center"
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
