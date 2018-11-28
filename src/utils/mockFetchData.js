export default () => {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(parseInt(Math.random() * 10))
    })
  }, 500)
}