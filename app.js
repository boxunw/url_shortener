const express = require('express')
const Url = require('./models/url')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// 設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// 將 request 導入路由器
app.use(routes)

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})