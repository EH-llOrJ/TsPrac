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

*/
