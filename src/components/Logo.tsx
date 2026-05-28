import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

type Props = { big?: boolean; light?: boolean };

export function Logo({ big = false, light = false }: Props) {
  return (
    <View style={styles.logoRow}>
      <View style={styles.breadIcon} />
      <Text style={[styles.logo, { fontSize: big ? 55 : 23, color: light ? '#fff' : COLORS.blue }]}>SIMPLE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  breadIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#FFB13B',
    transform: [{ rotate: '-25deg' }],
    marginRight: 5,
  },
  logo: { fontWeight: '900', letterSpacing: -3 },
});
