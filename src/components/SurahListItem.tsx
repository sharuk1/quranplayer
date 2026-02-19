import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Surah} from '../types/surah';

interface Props {
  surah: Surah;
  onPress: () => void;
}

export default function SurahListItem({surah, onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.badge}>
        <Text style={styles.number}>{surah.number}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.english}>{surah.englishName}</Text>
        <Text style={styles.arabic}>{surah.arabicName}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C2C2C2',
  },
  badge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  number: {
    color: '#fff',
    fontWeight: '700',
  },
  meta: {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  english: {fontSize: 16, color: '#111827', fontWeight: '600'},
  arabic: {fontSize: 22, color: '#111827'},
});
