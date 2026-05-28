import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenName } from '../types/navigation';

export function BottomNav({ go }: { go: (screen: ScreenName) => void }) {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => go('home')}>
        <Ionicons name="home" size={24} color="#555" />
      </TouchableOpacity>
      <Ionicons name="cube-outline" size={24} color="#555" />
      <Ionicons name="receipt-outline" size={24} color="#555" />
      <Ionicons name="person" size={24} color="#555" />
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 8,
    left: 20,
    right: 20,
    height: 55,
    borderRadius: 22,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 7,
  },
});
