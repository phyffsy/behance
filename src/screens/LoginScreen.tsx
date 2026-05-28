import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { Logo } from '../components/Logo';
import { AppButton } from '../components/Button';
import { COLORS } from '../constants/colors';
import { ScreenProps } from '../types/navigation';

export function LoginScreen({ go }: ScreenProps) {
  return (
    <ImageBackground source={require('../../assets/bread-bg.png')} style={styles.full}>
      <SafeAreaView style={styles.login}>
        <StatusBar style="light" />
        <View style={{ height: 80 }} />
        <Logo big />
        <View style={{ height: 55 }} />
        <View style={styles.input}>
          <TextInput placeholder="Usuario" placeholderTextColor="#c9c9c9" style={styles.textInput} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Contraseña" placeholderTextColor="#c9c9c9" secureTextEntry style={styles.textInput} />
          <Feather name="eye-off" size={18} color="#cfcfcf" />
        </View>
        <AppButton title="Iniciar sesión" onPress={() => go('home')} />
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        <AppButton title="Crear cuenta" outline />
        <View style={{ flex: 1 }} />
        <Text style={styles.help}>¿Necesitas Ayuda?</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1 },
  login: { flex: 1, padding: 28, alignItems: 'center' },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 22,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 3,
  },
  textInput: { flex: 1, fontWeight: '700' },
  link: { color: COLORS.blue, fontWeight: '900', marginVertical: 20 },
  help: { color: COLORS.blue, fontWeight: '900', marginBottom: 24 },
});
