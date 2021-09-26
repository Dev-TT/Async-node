
const doSomethingAsync = () => {            // this is a regular promise
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 1000)
  })
}

const doSomething = async () => {             // "async" goes in the function that wants to "await" a promise
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')