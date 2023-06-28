const copyButton = document.querySelector('#copyButton')
const linkText = document.querySelector('#linkText')

copyButton.addEventListener('click', () => {
  const link = linkText.textContent
  navigator.clipboard.writeText(link)
    .then(() => {
      alert('Link copied！');
    })
    .catch((error) => {
      console.error('Error occurred while copying the link:', error);
    });
})