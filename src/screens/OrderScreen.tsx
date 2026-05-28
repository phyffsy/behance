import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { BottomNav } from '../components/BottomNav';
import { products } from '../data/products';
import { COLORS } from '../constants/colors';
import { ScreenProps } from '../types/navigation';

export function OrderScreen({ go }: ScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Pill><Ionicons name="location" size={13} color={COLORS.blue} /> Calle 43 #89-70</Pill>
      <Text style={styles.confirm}>‹ Confirma tu pedido</Text>
      {products.map((p) => (
        <View key={p.id} style={styles.orderRow}>
          <Image source={p.img} style={styles.orderImg} />
          <View>
            <Text style={styles.week}>{p.week}</Text>
            <Text style={styles.orderTitle}>{p.title}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.payBtn} onPress={() => go('success')}>
        <Text style={styles.payText}>PAGAR</Text>
      </TouchableOpacity>
      <BottomNav go={go} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', padding: 20 },
  confirm: { fontSize: 25, color: COLORS.blue, fontWeight: '900', marginVertical: 16 },
  orderRow: { height: 94, backgroundColor: '#eef4ff', borderRadius: 22, marginVertical: 8, flexDirection: 'row', alignItems: 'center', padding: 10, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4, elevation: 3 },
  orderImg: { width: 105, height: 80, resizeMode: 'contain' },
  week: { fontSize: 22, color: COLORS.coral, fontWeight: '900' },
  orderTitle: { fontSize: 18, color: COLORS.blue, fontWeight: '900' },
  payBtn: { height: 70, borderRadius: 30, borderWidth: 3, borderColor: COLORS.blue, alignItems: 'center', justifyContent: 'center', marginTop: 25 },
  payText: { color: COLORS.blue, fontWeight: '900' },
});
