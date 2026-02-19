import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontSizeControl from '../components/FontSizeControl';
import SettingSwitch from '../components/SettingSwitch';
import {useSettings} from '../context/SettingsContext';

export default function SettingsScreen() {
  const {settings, updateSetting} = useSettings();

  return (
    <View style={styles.container}>
      <SettingSwitch
        label="Show Arabic"
        value={settings.showArabic}
        onValueChange={value => updateSetting('showArabic', value)}
      />
      <SettingSwitch
        label="Show Translation"
        value={settings.showTranslation}
        onValueChange={value => updateSetting('showTranslation', value)}
      />
      <SettingSwitch
        label="Show Transliteration"
        value={settings.showTransliteration}
        onValueChange={value => updateSetting('showTransliteration', value)}
      />
      <SettingSwitch
        label="Dark Mode"
        value={settings.darkMode}
        onValueChange={value => updateSetting('darkMode', value)}
      />
      <FontSizeControl value={settings.fontSize} onChange={value => updateSetting('fontSize', value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
});
