const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateRandomString = require('../../functions/generate_randomstring')

// 設定路由
router.get('/d/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  return res.render('new', { shortURL })
})

router.get('/:shortURL', (req, res) => {
  const param = req.params.shortURL
  Url.findOne({ shortURL: param })
    .then(url => res.redirect(url.originalURL))
})

router.post('/', (req, res) => {
  const originalURL = req.body.originalURL
  // 沒有輸入內容就按下了送出鈕的處理
  if (originalURL.trim().length === 0) {
    res.render('index', { error: 'Please enter the URL.' });
    return;
  }
  Url.findOne({ originalURL: originalURL })
    .then(url => {
      // 若輸入相同網址時則回覆一樣的縮址
      if (url) {
        return res.redirect(`/urls/d/${url.shortURL}`)
      } else {
        const shortURL = generateRandomString()
        Url.create({ originalURL, shortURL })
        return res.redirect(`/urls/d/${shortURL}`)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router