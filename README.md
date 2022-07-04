<h1 align="center">Structure for mobile ui tests using ts + appium + webdriverio</h1>

<b>Para acessar a versão em Português do Brasil, basta clicar [aqui](README-pt_BR.md)! :brazil:</b>

<p>This structure is possible to run UI tests for native apps (Android + iOS) using Appium + WebdriverIO.<p>

## Technologies and tools used:

- [TypeScript](https://www.typescriptlang.org/)
- [Allure Reporter](https://www.npmjs.com/package/@wdio/allure-reporter)
- [Appium Service](https://www.npmjs.com/package/@wdio/appium-service)
- [Local Runner](https://www.npmjs.com/package/@wdio/local-runner)
- [Mocha](https://www.npmjs.com/package/@wdio/mocha-framework)
- [Allure commandline](https://www.npmjs.com/package/allure-commandline)

## File Structure

📦TS-APPIUM-WEBDRIVERIO-STRUCTURE
 ┣ 📂apps
 ┃ ┣ 📂android
 ┃ ┃ ┗ 📜app-android-calculator.apk
 ┃ ┗ 📂ios
 ┃ ┃ ┗ 📜SimpleCalculator.app
 ┣ 📂config
 ┃ ┣ 📜wdio.android.app.conf.ts
 ┃ ┣ 📜wdio.ios.app.conf.ts
 ┃ ┣ 📜wdio.shared.conf.ts
 ┃ ┗ 📜wdio.shared.local.appium.conf.ts
 ┣ 📂tests
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜Biometrics.ts
 ┃ ┃ ┣ 📜Constants.ts
 ┃ ┃ ┣ 📜Gestures.ts
 ┃ ┃ ┣ 📜Utils.ts
 ┃ ┃ ┗ 📜WebView.ts
 ┃ ┣ 📂screenobjects
 ┃ ┃ ┣ 📂CalculatorScreen
 ┃ ┃ ┃ ┣ 📜CalculatorScreen.ts
 ┃ ┃ ┃ ┣ 📜calculator.android.elements.json
 ┃ ┃ ┃ ┗ 📜calculator.ios.elements.json
 ┃ ┃ ┗ 📜AppScreen.ts
 ┃ ┗ 📂specs
 ┃ ┃ ┗ 📜app.calculator.spec.ts
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README-pt_BR.md
 ┣ 📜README.md
 ┣ 📜appium.log
 ┣ 📜babel.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json

## Install and run

- Clone project `git clone https://github.com/maximilianoalves/ts-appium-webdriverio-structure.git`
- Run `npm install`
- Install Appium on a local machine
- Set variables Android and iOS on a local machine
- Open and config Android and iOS simulators
- Run tests using `npm run android.app`, `npm run ios.app` or `npm run full`
- Open report: `npm run report`


## Doubts or improvements !? contact me: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz) [![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves) [![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/) [![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/) [![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)