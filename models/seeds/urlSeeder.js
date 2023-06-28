const Url = require('../url')
const db = require('../../config/mongoose')

// 連線成功則產生種子資料
db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Url.create({ originalURL: `originalURL-${i}` })
  }
  console.log('done')
})