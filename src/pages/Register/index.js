import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useFrom} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useFrom({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // navigation.navigate('UploadPhoto')}
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangetext={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangetext={value => setForm('prodession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangetext={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangetext={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button
            title="Continue"
            onPress={onContinue}
            // onPress={() => navigation.navigate('UploadPhoto')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 0},
  page: {backgroundColor: colors.white, flex: 1},
});
