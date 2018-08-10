# VS CODE 설치

[다운로드 링크](https://code.visualstudio.com/)

## VS CODE 설정 팁

### code 터미널 실행 설치

1.vscode 열고

`command+shift+p`

2.셀명령 code 설치 3.터미널에서 code 명령어로 ide 오픈
code 검색 (path 에 code 설치 )

3.command+shift+p -> code 검색 (path 에 code 설치 ) `cd geegee-front`

4.vscode 오픈 `code ./`

### 설정

1.`command+,`

2.설정

```
{
  "git.autofetch": true,
  "explorer.confirmDelete": false,
  "window.zoomLevel": 0,
  "explorer.confirmDragAndDrop": false,
  "workbench.colorTheme": "Abyss",
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange",
  "editor.tabSize": 2,
  "git.enableSmartCommit": true,
  "prettier.eslintIntegration": true,
  "typescript.format.enable": false,
  "typescript.disableAutomaticTypeAcquisition": true,
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  "prettier.singleQuote": true
}
```

## 마켓 플레이스

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)

## 소스 받기

git 소스 받기

`git clone https://github.com/jkjang/angler-story.git`

디렉토리 이동

`cd geegeejs/front-end`

모듈 설치

`yarn or npm install`

서버 실행

`yarn start`

웹 브라우져 열기

`http://localhost:3000`

### [flow install](https://flow.org/en/)

```
npm install -g flow-bin
flow # make sure `npm bin -g` is on your path
```

### [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

> airbnb 에서 사용하는 스타일 가이드 적용

### 구조

```
$ tree
.
├── src
│   ├── config // eject 하면 설정파일 변경하는 폴더
|       └── env.js // 환경 변수
|       └── path.js // path (현재는 style path 추가 scss 사용 )
|       └── webpack.config.* // webpack 설정 파일 (sass-loader,css-laoder)
│   ├── components // component
│   └── containers // 앱의 상태 관리 (redux connect)
│   └── lib //
|       └── api // rest api url
|       └── common.js // 공통 함수
|       └── defaultClient.js // Axios default setting 추후 token 설정
│   └── store // 저장소
│       └── module // redux module
│       └── configure.js // redux configure , middleware setting
├── .eslintrc.js // javascript 정적 분석도구 https://eslint.org/
├── .env // NODE_PATH default dir src
├── .flowconfig // 정적 체크 도구 제외 폴더 및 옵션을 지정
├── package.json // 의존성 모듈 관리하기
└── README.md
```

## 리소스

1.  Get familiar with tools that you will be using

    1.  Package Managers
        - [npm](https://www.npmjs.com/)
        - [yarn](https://yarnpkg.com/lang/en/)
    2.  Task Runners
        - [npm scripts](https://docs.npmjs.com/misc/scripts)
        - [gulp](https://gulpjs.com/)

    - [Webpack](https://webpack.js.org/)

2.  Styling

    - CSS Preprocessor
      - [Sass/CSS](https://sass-lang.com/)
    - CSS Frameworks
      - [Material UI](https://material-ui.com/)
    - CSS module
      - [Open-color](https://yeun.github.io/open-color/)
      - [include-media](https://include-media.com/)

3.  State Management

    - [Redux](https://redux.js.org/)
      - Async actions (Side Effects)
        - [Redux Thunk](https://github.com/reduxjs/redux-thunk)
        - [Redux Pender](https://github.com/velopert/redux-pender)
      - Async actions Manage
        - [Redux Actions](https://github.com/redux-utilities/redux-actions)

4.  Type Checkers

    - [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
    - [Flow](https://flow.org/en/)

5.  Routing

    - [React-Router](https://reacttraining.com/react-router/)

6.  API Clients

    - REST
      - [axios](https://github.com/axios/axios)

7.  Utility Libraries

    - [Lodash](https://lodash.com/)
    - [Moment](https://momentjs.com/)
    - [classnames](https://github.com/JedWatson/classnames)
    - [react-onclickoutside](https://github.com/Pomax/react-onclickoutside)
    - [react-icons](https://www.npmjs.com/package/react-icons)

8.  Internationalization
    - [i18next](https://github.com/i18next/i18next)
    - [react-i18next](https://github.com/i18next/react-i18next)
