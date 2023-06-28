# 短網址產生器 URL shortener
將長網址轉換為短網址的工具，使得URL更簡潔、易於分享和使用
## Features - 產品功能
1. 使用者可以在表單輸入原始網址

![image](https://github.com/boxunw/cut_link/blob/main/index.png)

按下Shorten送出表單之後，畫面會回傳相對應的短網址

![image](https://github.com/boxunw/cut_link/blob/main/shorturl.png)

2. 網址可以直接按copy複製至剪貼簿
3. 網址列空白即送出會出現提示
4. 點擊中間迴紋針圖示會回到首頁
## Environment SetUp - 環境建置
1. [Node.js](https://nodejs.org/zh-tw)
2. [express 4.17.1](https://www.npmjs.com/package/express/v/4.17.1)
3. [express-handlebars 4.0.2](https://www.npmjs.com/package/express-handlebars?activeTab=versions)
4. [nodemon 2.0.22](https://www.npmjs.com/package/nodemon)
5. [MongoDB Atlas 資料庫](https://www.mongodb.com/atlas/database)
6. [Robo 3T 資料庫管理工具](https://robomongo.org/)
7. [Mongoose 5.13.19](https://www.npmjs.com/package/mongoose?activeTab=versions)
8. [dotenv 16.3.1](https://www.npmjs.com/package/dotenv)
## Installing - 安裝流程
1. 請先確認已安裝Node.js，若無，至環境建置第1項點擊安裝
2. 請先至MongoDB Atlas雲端資料庫申請及使用Robo 3T創建資料庫後取得以下連線字串
```
mongodb+srv://<Your account>:<Your password><server location>/<database name>?retryWrites=true&w=majority
```
3. 開啟終端機(Terminal)，指令cd到欲放置專案位置，Clone此專案至本機電腦
```
git clone https://github.com/boxunw/cut_link.git
```
4. 打開專案資料夾
```
cd cut_link
```
5. 新建.env檔案，並貼上以下字串
```
MONGODB_URI=第2項取得的連線字串
```
6. 安裝 npm 套件
```
npm install
```
7. 開啟程式
```
npm run dev
```
8. 在瀏覽器輸入以下網址即可開始使用此工具
```
http://localhost:3000
```
