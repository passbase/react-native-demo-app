# Passbase

![alt Passbase](https://i.imgur.com/cOj85Lg.jpg)

## Official Passbase React-Native Demo App
This App shows an example integration of the Passbase iOS SDK into an App. Before your try to run the App please sign up on our [developer platform](https://app.passbase.com/signup) and use your own publishabe API key, which you can find in the [API settings](https://app.passbase.com/settings/api) section.

## Install the App & Run (iOS)
* cd into the project and run `yarn` 
* cd into the ios directory & then run `pod install` to install the Passbase SDK and dependencies
* Open the file with extension `.xcworkspace`
* Go into the `App.js` & replace YOUR_PUBLISHABLE_API_KEY with your own API key in line 58.
* Select a device and build & run the App (You might have to adjust the App's signing to your own)

## Install the App & Run (android)
* cd into the project and run `yarn` 
* Open the android folder using android studio
* Go into the `App.js` & replace YOUR_PUBLISHABLE_API_KEY with your own API key in line 58.
* sync the gradle & run the App

## Author

Mathias J. Klenk, mathias@passbase.com

## License

Passbase is available under the Apache license. See the LICENSE file for more info.
