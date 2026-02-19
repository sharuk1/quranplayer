import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Track,
} from 'react-native-track-player';
import {Surah} from '../types/surah';

let isSetupDone = false;

const capabilities = [Capability.Play, Capability.Pause, Capability.SeekTo, Capability.Stop];

export async function setupPlayer() {
  if (isSetupDone) {
    return;
  }

  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    android: {
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
    },
    capabilities,
    compactCapabilities: [Capability.Play, Capability.Pause],
    notificationCapabilities: capabilities,
  });
  await TrackPlayer.setRepeatMode(RepeatMode.Off);
  isSetupDone = true;
}

export async function loadSurahTrack(surah: Surah) {
  const track: Track = {
    id: `${surah.number}`,
    url: `https://aliflearning.in/quran/TamilQuran/${surah.number}.mp3`,
    title: surah.englishName,
    artist: surah.arabicName,
  };

  await TrackPlayer.reset();
  await TrackPlayer.add([track]);
}
