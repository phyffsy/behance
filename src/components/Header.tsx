import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { Logo } from './Logo';

export function Header({ light = false }: { light?: boolean }) {
  const color = light ? '#fff' : COLORS.blue;
  return (
    <View style={styles.topbar}>
      <Feather name="menu" size={23} color={color} />
      <Logo light={light} />
      <Feather name="shopping-cart" size={24} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});
