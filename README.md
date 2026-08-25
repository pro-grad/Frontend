# StudentX Beta

Ionic Vue + TypeScript mobile beta for testing the StudentX AI assistant flow.

## App Flow

- Onboarding
- Login
- AI assistant test shell

The assistant currently returns a placeholder response. Replace the mock in `src/pages/AssistantPage.vue` with the backend team's fine-tuned AI endpoint when the API contract is ready.

## Run Locally

```bash
npm install
npm run dev
```

## Build Web Assets

```bash
npm run build
```

## Sync Mobile Project

```bash
npm run mobile:sync
```

## Android

Generate the Android Capacitor project:

```bash
npm run mobile:add:android
```

To open it in Android Studio:

```bash
npm run mobile:sync
npm run mobile:open:android
```

To run on an emulator or connected device:

```bash
npm run mobile:run:android
```

Requirements:

- JDK installed and available on `PATH`
- Android Studio
- Android SDK installed
- An Android emulator or USB-connected Android device

## iOS

iOS can be added from a macOS machine with Xcode:

```bash
npm run mobile:add:ios
npm run mobile:open:ios
```
