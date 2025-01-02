# Change Log

## [0.6.1] - 2025-01-02
### Changed

- vscode 최소 요구 버전을 `1.93.x` 로 내렸습니다.
  - cursor 와 함께 쓰려하니 최소 요구 버전이 너무 높아서 다운받지 못하는 문제가 있었습니다.

## [0.6.0] - 2024-12-05
### Changed

- 모든 React 관련 템플릿과 스니펫들에 대하여 tailwindcss 기반으로 작업할 수 있도록 변경합니다.
  - 즉 styled 관련 키워드는 없어지고 cn(clsx)로 대체되었습니다.
- 스니펫
  - Imperative Container 가 추가되었습니다.
  - 사용: `!rccimp`
- 템플릿
  - 만들어지는 스토리북 코드 내 불필요한 코드를 제거하였습니다.
  - 모든 imperative 컴포넌트의 스토리북에 actions 를 기본적으로 추가 해 두었습니다.
  - 기존 dialog -> dialogWithResolver 로 변경합니다.
  - 신설: dialog
    - 간단히 open 기능을 제공하는 다이얼로그 코드 입니다.
  - 신설: antdTable
    - [ant.design](https://ant.design/components/table) 의 Table 컴포넌트를 Wrapping 하여 사용되는 컴포넌트 입니다.
    - 여기서 필수적으로 사용되는 columns hook 도 자동으로 생성합니다.

## [0.5.0] - 2022-11-28
### Changed

- src/ui 에 대하여 디자인 시스템 컴포넌트 모듈로 간주하여 하위 폴더 제한없이 컴포넌트를 생성할 수 있도록 기능을 변경하였습니다.

## [0.4.0] - 2022-09-28
### Changed

- 아래 기능에 대하여 components 에 하위경로가 없어도 사용 가능하도록 변경하였습니다.
  - `Add UI Component with Storybook`
  - `Add Storybook for This Component`

## [0.3.1] - 2022-08-11
### Fixed

- common 과 shared 모듈에서 UI 컴포넌트 생성 컨텍스트 메뉴가 뜨지 않던 부분을 수정합니다.

## [0.3.0] - 2022-08-10
### Changed

- `Add Sub Module` 기능이 추가되었습니다.
- `Add UI Component with Storybook` 기능이 추가되었습니다.
- `Add Storybook for This Component` 기능이 추가되었습니다.
- 좌측 탐색기 내 우클릭된 파일과 폴더별로 다른 컨텍스트 메뉴가 나오도록 표현 조건을 보완하였습니다.

## [0.2.4] - 2022-08-03
### Changed

- 기존 `npx` 가 아닌 각 프로젝트에 설치된 `ts-fe-cli` 를 직접 수행하도록 변경하였습니다.
- vscode 1.60.0 이상에서 수행할 수 있도록 최소 수행 버전 기준이 완화되었습니다.

## [0.2.0] - 2022-08-02
### Added

- `Add Feature Module` 기능이 추가되었습니다.
- 좌측 탐색기(explorer) 에서 typescript 나 폴더 계통에서 우클릭 하면 나타납니다.

## [References]

본 파일은 아래 내용을 바탕으로 포멧을 맞추고 있습니다.

- [Keep a Changelog](http://keepachangelog.com/)