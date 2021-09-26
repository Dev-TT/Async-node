
setTimeout(() => {
    console.log(2);
    
}, 400);

console.log(1); 

const getEnvironment= () =>{
    return new Promise(resolve =>{
            setTimeout(() => {
                resolve('Environment is cool');
            }, 2000);
        }
    );
}

const getUser = (env) =>{    
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log('this runs first!');
            resolve('User is Juan. Env: '+env);            //You could also call reject(err) to throw an error
        }, 1000);
    });
};

getEnvironment().then(env=>{
    return getUser(env)
}).then(user => {
    console.log(user);
}).catch(error => {
    // error handler
});

// getUser().then(
//     user =>{                            //ENTRY POINT
//         console.log('this runs last');          // This is the callback definition
//         console.log(user);
//     }    
// );



// executes getUser() and waits
// does everything inside getUser
// then GetUser executes the Callback function whattodonext, 
// which is defined in the below code



