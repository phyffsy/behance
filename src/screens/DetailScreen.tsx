import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { BottomNav } from '../components/BottomNav';
import { AppButton } from '../components/Button';
import { products } from '../data/products';
import { COLORS } from '../constants/colors';
import { ScreenProps } from '../types/navigation';


export function DetailScreen({ go }: ScreenProps) {
  const p = products[1];

  return (
    <SafeAreaView style={styles.blueScreen}>

      <TouchableOpacity style={styles.backButton} onPress={() => go('home')}>
        <Feather name="arrow-left" size={26} color="white" />
      </TouchableOpacity>

      <Header light />

      <Pill>
        Buscar  <Feather name="search" size={13} color={COLORS.blue} />
      </Pill>

      <Text style={styles.detailTitle}>
        Pan de Frutos{`\n`}Secos
      </Text>

      <Image source={p.img} style={styles.heroBread} />

      <View style={styles.sheet}>
        <Text style={styles.descText}>
          {p.desc}{`\n\n`}
          Es libre de sodio, contiene una buena fuente de proteína vegetal y es libre de azúcar añadida.
        </Text>

        <AppButton
          title="COMPRAR"
          onPress={() => go('order')}
          style={{ width: 160, alignSelf: 'center' }}
        />

        <View style={styles.qty}>
          <Text style={styles.qtyText}>-  0  +</Text>
        </View>
      </View>

      <BottomNav go={go} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blueScreen: {
    flex: 1,
    backgroundColor: COLORS.blue,
    padding: 20,
  },

  backButton: {
    position: 'absolute',
    top: 120,
    left: 20,
    zIndex: 999,
    elevation: 999,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailTitle: {
    color: 'white',
    fontWeight: '900',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 8,
  },

  heroBread: {
    width: '100%',
    height: 210,
    resizeMode: 'contain',
    marginTop: 4,
  },

  sheet: {
    backgroundColor: COLORS.beige,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    marginHorizontal: -20,
    marginTop: -30,
    padding: 45,
    flex: 1,
  },

  descText: {
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    color: '#555',
    fontWeight: '600',
    marginBottom: 25,
  },

  qty: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#ffd4c8',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 4,
  },

  qtyText: {
    color: COLORS.coral,
    fontWeight: '900',
  },
});