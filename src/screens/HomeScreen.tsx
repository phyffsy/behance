import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { BottomNav } from '../components/BottomNav';
import { products } from '../data/products';
import { COLORS } from '../constants/colors';
import { ScreenProps } from '../types/navigation';

export function HomeScreen({ go }: ScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Pill><Ionicons name="location" size={13} color={COLORS.blue} /> Ubicacion</Pill>
      <View style={styles.homeTitle}>
        <Text style={styles.hello}>Hola, Marilyn</Text>
        <Text style={styles.bigTitle}>Buenas migas</Text>
      </View>
      <Pill><Feather name="search" size={13} color="#999" /> Qué estas buscando?</Pill>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {products.map((p) => (
          <TouchableOpacity key={p.id} style={styles.card} onPress={() => go('detail')}>
            <Image source={p.img} style={styles.cardImg} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{p.title}</Text>
              <Text style={styles.cardDesc}>{p.desc}</Text>
              <Text style={styles.price}>{p.price}</Text>
            </View>
            <View style={styles.tinyCircle}><Text style={{ color: COLORS.coral }}>♡</Text></View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomNav go={go} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', padding: 20 },
  homeTitle: { marginTop: 4 },
  hello: { color: '#999', fontWeight: '800' },
  bigTitle: { fontSize: 24, color: COLORS.blue, fontWeight: '900' },
  card: {
    height: 118,
    marginTop: 14,
    borderRadius: 22,
    backgroundColor: COLORS.beige,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 4,
  },
  cardImg: { width: 125, height: 90, resizeMode: 'contain', marginLeft: -18 },
  cardTitle: { color: COLORS.blue, fontWeight: '900', fontSize: 16 },
  cardDesc: { fontSize: 9, color: '#555', fontWeight: '600' },
  price: { color: COLORS.blue, fontWeight: '900', alignSelf: 'flex-end', marginTop: 5 },
  tinyCircle: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#ffd9ca', alignItems: 'center', justifyContent: 'center' },
});
