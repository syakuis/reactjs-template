# Typescript Template

타입스크립트 개발을 시작하기 위한 기본 템플릿을 제공합니다.

아래의 구성을 포함하고 있습니다.

## 변경사항

## 2021. 10. 27

- Node 14.17.0 이상 지원
- webpack
  - eslint-loder → eslint-webpack-plugin 변경
  - devServer
    - contentBase → static 변경
      - 참고 - [https://webpack.kr/configuration/dev-server/#root](https://webpack.kr/configuration/dev-server/#root)
- testing-library
  - eslint 설정에서 plugin:testing-library/recommended → plugin:testing-library/dom 변경
    - 참고 - [https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/migration-guides/v4.md](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/migration-guides/v4.md)
- axios
  - axios.defaults.headers -> axios.defaults.headers.common 헤더 설정 변경

## 구성

- webpack
- reactjs
- react-dom
- babel
- typescript
- jest
- json-server
- eslint
- prettier
- bootstrap
- fortawesome
- axios

## 참고사항

### 필수 사항

- node ^14.17.0
- npm ^6.14.15

### NODE 설치

```
$ sudo brew install node

$ sudo npm install -g n

$ sudo n 14.17.0 혹은 sudo n latest
```

### NPM 설치

```
$ sudo npm install -g npm
```

### 패키지 설치

```
$ npm install
```

### 패키지 업데이트

```
$ npm install -g npm-check-updates

$ ncu -u

$ npm install
```

## 시작

### 구동

```
npm run start
npm run db
```

### 빌드

```
// 운영
npm run build

// 개발
npm run dev
```
