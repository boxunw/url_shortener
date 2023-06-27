// 從陣列中隨機挑選出一個元素
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// 隨機產生短網址所需的 5 碼英數組合
function generateRandomString() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = (lowerCaseLetters + upperCaseLetters + numbers).split('')

  let randomString = ''
  for (let i = 0; i < 5; i++) {
    randomString += sample(collection)
  }

  return randomString
}


module.exports = generateRandomString