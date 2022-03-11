boilerplate-react-native
=======================
## React Native boilerplate app with shared infrastructure for web

### Requirements

* XCode
* Android Studio
* Node `brew install node`
* watchman `brew install watchman`
* React Native CLI `yarn global add react-native-cli`

### Create a new project

* Initiate a new React Native project in a temporary location `react-native init projectName`
* Copy the following files / folders from the temporary location into your boilerplate project root: `__tests__`, `android`, `ios`, `app.json`.
* Change instances of 'boilerplateReactNative' in `index.android.js` and `index.ios.js` to the name you chose for your app

### Install & run
* `yarn`

#### Web ####

*To run locally*
* `yarn web`
* View site locally on port 8081

*To build for production*
* `yarn buildweb`
* Compiles to '/web/build'

#### IOS ####

*To run in the simulator*
* `react-native run-ios`
  * `Command⌘ + R` to refresh after changes

#### Android ####

*To run in the Android Virtual Device*
* `android avd`
  * Once in the "AVD Manager", select your AVD and click "Start...".

### Run tests

### Create documentation

### Release History

* 0.0.1 Create repo, add contributors

### Roadmap

* Tests
* Docs
* Linting
* Improve shared styling
* Shared component containers