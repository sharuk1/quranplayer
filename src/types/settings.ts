export interface SettingsState {
  showArabic: boolean;
  showTranslation: boolean;
  showTransliteration: boolean;
  fontSize: number;
  darkMode: boolean;
}

export interface SettingsContextType {
  settings: SettingsState;
  updateSetting: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => void;
}
