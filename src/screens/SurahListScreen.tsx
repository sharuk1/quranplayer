import React, {useLayoutEffect} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SurahListItem from '../components/SurahListItem';
import surahs from '../data/surahs.json';
import {RootStackParamList} from '../types/navigation';
import {Surah} from '../types/surah';

type Props = NativeStackScreenProps<RootStackParamList, 'SurahList'>;

export default function SurahListScreen({navigation}: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Settings" onPress={() => navigation.navigate('Settings')} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={surahs as Surah[]}
        keyExtractor={(item: Surah) => `${item.number}`}
        renderItem={({item}: {item: Surah}) => (
          <SurahListItem surah={item} onPress={() => navigation.navigate('Player', {surah: item})} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
