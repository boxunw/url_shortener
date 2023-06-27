const express = require('express')
const mongoose = require('mongoose')
const Url = require('./models/url')
const exphbs = require('express-handlebars')
const generateRandomString = require('./controllers/generate_randomstring')
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

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/urls', (req, res) => {
  res.redirect('/')
})

app.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  return res.render('new', { shortURL })
})

app.get('/url/:shortURL', (req, res) => {
  const param = req.params.shortURL
  Url.findOne({ shortURL: param })
    .then(url => res.redirect(url.originalURL))
})

app.post('/urls', (req, res) => {
  const originalURL = req.body.originalURL
  // 沒有輸入內容就按下了送出鈕的處理
  if (originalURL.trim().length === 0) {
    res.render('index', { error: 'Please enter the URL.' });
    return;
  }
  Url.findOne({ originalURL: originalURL })
    .then(url => {
      if (url) {
        return res.redirect(`/${url.shortURL}`)
      } else {
        const shortURL = generateRandomString()
        Url.create({ originalURL, shortURL })
        return res.redirect(`/${shortURL}`)
      }
    })
    .catch(error => console.log(error))
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})