const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars');
// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3000
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// 設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})