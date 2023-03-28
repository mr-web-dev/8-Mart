let myScroll = document.querySelector('.scroll-top')

window.addEventListener('scroll', function (e) {
  myScroll.style.transform = `rotate(${+window.pageYOffset + "deg"})`
})