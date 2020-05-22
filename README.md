# User management app

This is a simple user management application.

- Made with React Native + Typescript Starter Kit
- Uses data in a local way, persisting with ReduxPersist since I have no API to retrieve the data from.

It features 3 screens:

- Welcome screen
- User List screen
- Add new user screen

It also features a "logout" functionality that allows a "logged in" user to reset the current session (current username active on my reducer).

## How to install

- `git clone git@github.com:samcampisi/shasta-test.git`
- `cd shasta-test`
- `yarn install`

## Running on Android

- Make sure you have no other packagers running. In the console:
- `yarn start`
- Start an emulator (e.g., using Android Studio -> Tools -> AVD Manager -> start one) or connect a real android device to your computer.
- `react-native run-android` OR
- Click on "RUN" right in Android Studio
- If you connected a real android device, shake the device and on the pop-up menu select Settings -> Debug server host & port for device -> enter your IP with the port 8081 (example: 192.168.1.222:8081) and select OK. Then you can reload the app.

## Running on iOS

- You must have cocoapods installed (if you don't, you can install it by doing `sudo gem install cocoapods` in the console)
- `cd ios && pod install && cd ..`
- `yarn start` (make sure you don't have other packagers running)
- Start an emulator (e.g. using XCode -> Select a device such as iPhone 11 -> Run) or connect a real iOS device to your computer and select it from the dropdown in XCode.

## Troubleshooting

- if things don't work, clean up all your build and node_modules folders, npm install and rebuild

## Known issues

- Apparently there's no possible animation customization by default when using React Navigation's plain bottom tabs (https://github.com/react-navigation/react-navigation/issues/6828), but I added other Layout Animations to make up for this. One could also use the Material bottom tabs (an extra package in combination with ReactNavigation) as an alternative for transitions between tabs.
