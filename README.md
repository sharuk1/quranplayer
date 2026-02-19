# Alif Quran (React Native CLI + TypeScript)

A React Native Android app built with TypeScript for browsing Surahs and streaming recitation audio.

## Tech Stack
- React Native CLI (no Expo)
- TypeScript
- React Navigation (native stack)
- react-native-track-player (streaming + background + lock screen controls)
- Local JSON for Surah metadata
- Context API + AsyncStorage for settings persistence

## Folder Structure

```text
.
├── App.tsx
├── index.js
├── package.json
├── src
│   ├── components
│   │   ├── FontSizeControl.tsx
│   │   ├── PlayerControls.tsx
│   │   ├── SettingSwitch.tsx
│   │   └── SurahListItem.tsx
│   ├── context
│   │   └── SettingsContext.tsx
│   ├── data
│   │   └── surahs.json
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── screens
│   │   ├── PlayerScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── SurahListScreen.tsx
│   ├── services
│   │   ├── playbackService.ts
│   │   └── trackPlayer.ts
│   ├── types
│   │   ├── navigation.ts
│   │   ├── settings.ts
│   │   └── surah.ts
│   └── utils
│       └── time.ts
└── ...config files
```

## Features Implemented

1. **Surah List Screen**
   - Reads all 114 Surahs from `src/data/surahs.json`
   - Shows Surah number, Arabic name, and English name
   - Tap to open player for selected Surah

2. **Player Screen**
   - Displays selected Surah name
   - Play/Pause control
   - Progress bar with seek support
   - Streams from:
     - `https://aliflearning.in/quran/TamilQuran/{SurahNumber}.mp3`
   - Background playback + lock-screen controls via `react-native-track-player`

3. **Settings Screen**
   - Toggle Arabic display
   - Toggle translation display
   - Toggle transliteration display
   - Font size adjustment slider
   - Dark mode toggle
   - Persisted in AsyncStorage

## Step-by-Step Setup (Android)

### 1) Create a new React Native TypeScript app (if starting from scratch)

```bash
npx react-native@latest init AlifQuran --template react-native-template-typescript
cd AlifQuran
```

If you are using this repository directly, skip init and continue.

### 2) Install dependencies

```bash
npm install
```

### 3) Install Android requirements

Ensure the following are installed:
- Node.js >= 18
- Java 17
- Android Studio + Android SDK
- `adb` available in PATH

### 4) Native setup for React Navigation + gesture handler

`react-native-gesture-handler` is already listed. For RN 0.74+, default setup is typically enough when app is wrapped in `GestureHandlerRootView` (already done).

### 5) Native setup for Track Player (Android)

Open `android/app/src/main/AndroidManifest.xml` and ensure these are present:

```xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.INTERNET" />
```

Inside `<application>`, ensure foreground service is declared according to current `react-native-track-player` docs for your version.

> Note: service declaration differs slightly by version. Follow official docs if your Gradle plugin/RN version requires additional entries.

### 6) Run Metro

```bash
npm run start
```

### 7) Run app on Android emulator/device

```bash
npm run android
```

## Audio URL Pattern

Track URL is generated in `src/services/trackPlayer.ts` as:

```ts
`https://aliflearning.in/quran/TamilQuran/${surah.number}.mp3`
```

## Architecture Notes

- **Modular structure** with `components`, `screens`, `services`, `context`, `types`, and `utils`
- **Reusable UI components** for settings controls and list items
- **Context API** for global settings state
- **Strict TypeScript** interfaces for data and navigation params
- Ready to scale with additional screens, ayah-level data, and playlists
