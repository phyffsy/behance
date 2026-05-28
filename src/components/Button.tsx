import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { COLORS } from '../constants/colors';

type Props = { title: string; onPress?: () => void; outline?: boolean; style?: ViewStyle };

export function AppButton({ title, onPress, outline = false, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[outline ? styles.outlineBtn : styles.primaryBtn, style]}>
      <Text style={outline ? styles.outlineText : styles.primaryText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    height: 58,
    borderRadius: 18,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryText: { color: 'white', fontWeight: '900' },
  outlineBtn: {
    height: 58,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f8f8ff',
  },
  outlineText: { color: COLORS.blue, fontWeight: '900' },
});
