// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Url model
const Url = require('../../models/url')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/urls', (req, res) => {
  res.redirect('/')
})

// 匯出路由模組
module.exports = router