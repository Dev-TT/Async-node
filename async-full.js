const doSomethingAsync = async () => {              // I want to await for another promise here so I put async
    console.log(await doElseAsync2(1));              // option 1: call a promise inside a promise (this one requiers Async)
    console.log('next');
    return new Promise(resolve => {
      setTimeout(() => {
        
        resolve('I did something');
    }, 1000)
    })
  }
  doElseAsync2 = (value) => {                            // this one does not require Async because doesnt await for another one
    return new Promise(resolve => {
      setTimeout(() => {
        
        resolve('I did something ELSE_Option: '+value);

      }, 2000)
    })
  }
  const doSomething = async () => {                 // option 2: call them sequencially
    console.log(await doSomethingAsync());
    console.log(await doElseAsync2(2));
    
  }
  
  console.log('Before')
  doSomething()
  console.log('After')