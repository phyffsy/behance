import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../components/Logo';
import { AppButton } from '../components/Button';
import { COLORS } from '../constants/colors';
import { ScreenProps } from '../types/navigation';

export function SuccessScreen({ go }: ScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <Image source={require('../../assets/baker.png')} style={styles.baker} />
      <Logo />
      <View style={styles.successCard}>
        <View style={styles.badge}><Ionicons name="checkmark" size={45} color="white" /></View>
        <Text style={styles.successTitle}>Pago Exitoso !</Text>
        <Text style={styles.successText}>Tu pago fue exitoso, ya vamos con pan caliente para ti</Text>
      </View>
      <AppButton title="Ver tu pedido" onPress={() => go('home')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', padding: 20 },
  baker: { position: 'absolute', width: '100%', height: '55%', top: 0, opacity: 0.22, resizeMode: 'cover' },
  successCard: { height: 330, marginTop: 120, backgroundColor: 'white', borderRadius: 48, alignItems: 'center', justifyContent: 'center', padding: 35, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, elevation: 5 },
  badge: { width: 90, height: 90, borderRadius: 45, backgroundColor: COLORS.blue, alignItems: 'center', justifyContent: 'center', marginBottom: 25 },
  successTitle: { color: COLORS.blue, fontWeight: '900', fontSize: 32 },
  successText: { color: '#777', fontWeight: '700', textAlign: 'center', fontSize: 16, marginTop: 15 },
});
