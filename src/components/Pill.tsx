import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = { children: React.ReactNode };

export function Pill({ children }: Props) {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 30,
    backgroundColor: '#dedede',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 22,
    marginVertical: 4,
  },
  pillText: { fontSize: 12, color: '#777', fontWeight: '800' },
});
