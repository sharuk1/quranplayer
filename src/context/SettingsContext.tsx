import React, {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SettingsContextType, SettingsState} from '../types/settings';

const STORAGE_KEY = 'alif_quran_settings';

const defaultState: SettingsState = {
  showArabic: true,
  showTranslation: true,
  showTransliteration: false,
  fontSize: 18,
  darkMode: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({children}: PropsWithChildren) {
  const [settings, setSettings] = useState<SettingsState>(defaultState);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value: string | null) => {
        if (value) {
          setSettings(JSON.parse(value) as SettingsState);
        }
      })
      .catch(() => {
        // no-op fallback to defaults
      });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings)).catch(() => {
      // ignore persistence errors
    });
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      updateSetting: (key, val) =>
        setSettings(prev => ({...prev, [key]: val})),
    }),
    [settings],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return context;
}
