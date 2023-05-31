// console.log('lilit')
// setTimeout(() => {
//   console.log('oi')
// }, 5000)
// console.log('mari')
// console.log('Náira')

setTimeout(primeira = () => {
  console.log('retorno primeira callback')
}, 5000) 
setTimeout(segunda = () => {
console.log('retorno segunda callback')
})
console.log('console direto 1')
setTimeout(terceira = () => {
console.log('retorno terceira callback')
}, 3000)
console.log('console direto 2')
