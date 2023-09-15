const express = require("express");
const app = express();
const path = require("path");

// 정적 파일(HTML, JavaScript 등)을 호스팅하기 위한 경로 설정
app.use(express.static(path.join(__dirname, "public")));

// 웹 서버 포트 설정
const port = process.env.PORT || 3000;

// 웹 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
