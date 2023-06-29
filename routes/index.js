// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)

// 引入 todos 模組程式碼
const urls = require('./modules/urls')
// 將網址結構符合 /urls 字串開頭的 request 導向 urls 模組 
router.use('/urls', urls)

// 匯出路由器
module.exports = router