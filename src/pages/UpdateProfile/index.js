import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Profile, Header, Input, Button, Gap} from '../../components';
import {colors, getData} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });

  const update = () => {
    console.log('profile', profile);
    const data = profile;
    data.photo = profile.photo.uri;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => {
        console.log('success : ');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={profile.photo} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangetext={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangetext={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" value={password} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
