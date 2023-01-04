/*
npm init -y
npm i -D parcel typescript

package.json
"main"줄 제거 (현재 프로젝트에서는 필요하지 않아서 제거)
"scripts" 부분
  "scripts": {
    "dev": "parcel ./index.html",
    "build": "parcel build ./index.html"
  },
로 수정

index.html
<script type="module" defer src="./src/main.ts"></script>
추가

tsconfig.json 작성
main.ts 작성 후 터미널에서 npm run dev
(parcel로 개발 서버 오픈)

npm run dev 하면
dist 폴더 생성되고
dist index.html -> src= 부분 들어가면 작성했던 코드들이 들어가있고
컨트롤 F로 log(hello) 부분 찾아보기

*/
