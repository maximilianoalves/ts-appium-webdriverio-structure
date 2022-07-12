<h1 align="center">Estrutura para testes de UI mobile utilizando ts + appium + webdriverio</h1>

<p>Essa estrutura possibilita executar testes de UI para aplicativos nativos (Android + iOS) utilizando Appium + WebdriverIO.<p>

## Tecnologias e ferramentas utilizadas:

- [TypeScript](https://www.typescriptlang.org/)
- [Allure Reporter](https://www.npmjs.com/package/@wdio/allure-reporter)
- [Appium Service](https://www.npmjs.com/package/@wdio/appium-service)
- [Local Runner](https://www.npmjs.com/package/@wdio/local-runner)
- [Mocha](https://www.npmjs.com/package/@wdio/mocha-framework)
- [Allure commandline](https://www.npmjs.com/package/allure-commandline)

## Estrutura de arquivos

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

- Clonar o projeto `git clone https://github.com/maximilianoalves/ts-appium-webdriverio-structure.git`
- Instalar as dependencias `npm install`
- Instalar o Appium em sua maquina local ou se você tinha o appium instalado execute `npm link appium`
- Setar as variaveis de ambiente para Android e iOS em sua máquina local
- Abrir e configurar o simulador para Android e iOS
- Executar os testes usando: `npm run android.app`, `npm run ios.app` ou `npm run full`
- Abrir o relatório dos testes: `npm run report`


## Dúvidas ou melhoras !? Entre em contato: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz) [![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves) [![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/) [![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/) [![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)
