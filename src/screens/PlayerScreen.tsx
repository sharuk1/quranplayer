import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {State, usePlaybackState, useProgress} from 'react-native-track-player';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import PlayerControls from '../components/PlayerControls';
import {RootStackParamList} from '../types/navigation';
import {loadSurahTrack, setupPlayer} from '../services/trackPlayer';
import {formatSeconds} from '../utils/time';

type Props = NativeStackScreenProps<RootStackParamList, 'Player'>;

export default function PlayerScreen({route}: Props) {
  const {surah} = route.params;
  const playbackState = usePlaybackState();
  const progress = useProgress(250);
  const [seekingValue, setSeekingValue] = useState<number | null>(null);

  useEffect(() => {
    setupPlayer()
      .then(() => loadSurahTrack(surah))
      .catch(() => {
        // setup errors are ignored for now
      });
  }, [surah]);

  const isPlaying = useMemo(
    () => playbackState.state === State.Playing || playbackState.state === State.Buffering,
    [playbackState.state],
  );

  const position = seekingValue ?? progress.position;

  const onTogglePlay = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{surah.englishName}</Text>
      <Text style={styles.subtitle}>{surah.arabicName}</Text>

      <Slider
        minimumValue={0}
        maximumValue={Math.max(progress.duration, 1)}
        value={position}
        onValueChange={setSeekingValue}
        onSlidingComplete={(value: number) => {
          setSeekingValue(null);
          TrackPlayer.seekTo(value);
        }}
      />
      <View style={styles.timeRow}>
        <Text>{formatSeconds(position)}</Text>
        <Text>{formatSeconds(progress.duration)}</Text>
      </View>

      <PlayerControls isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  title: {fontSize: 28, fontWeight: '700', marginTop: 12, color: '#111827'},
  subtitle: {fontSize: 36, marginVertical: 16, color: '#111827'},
  timeRow: {flexDirection: 'row', justifyContent: 'space-between'},
});
