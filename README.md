# ts-fe-vscode-extension

업무용으로 ts-fe-cli 와 함께 사용하기 위한 vscode 확장 프로그램 입니다.

현재 개발 중입니다. 😅

## Pre Dependency

본 확장 프로그램 사용 전, 반드시 아래와 같이 [ts-fe-cli](https://github.com/thesoncriel/ts-fe-cli)를 먼저 설치하시기 바랍니다~ 🙌

```sh
$ npm i -D ts-fe-cli@latest
```

그리고 프로젝트 내 `package.json` 에 아래와 같이 script 를 추가 해주세요~!
```json
{
  "scripts": {
    "cli": "ts-fe-cli"
  },
}
```

그럼 즐코하세요~ 👍

## How To Test

먼저 watch 모드를 수행하여 파일 변경 시 자동으로 빌드 되도록 합니다.

```sh
$ npm run watch
```

그리고 `src/extension.ts` 파일을 열고 `cmd + shift + d` 를 누른 뒤 좌측 상단 `Run and Debug` 를 눌러줍니다.

테스트용 vscode 새창이 열리면, 적절한 프로젝트를 불러와서 테스트를 합니다~!
