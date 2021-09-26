
setTimeout(() => {
    console.log(2);
    
}, 400);

console.log(1); 

const getEnvironment = callback=>{
    console.log('getting ennvirons');
    setTimeout(() => {
        console.log('environment received');
        callback('environment is Nice')
    }, 2000);
};

const getUser = whattodonext =>{            //whattodonext is the Callback (a parameter to be received)
    console.log('this runs before first!');
    
    setTimeout(() => {
        console.log('this runs after the 1sx!');
        whattodonext('Result: User is Juan');
    }, 1000);
};

getUser(user =>{
    console.log('after user is received');
    console.log(user);
    
    getEnvironment(env=>{
        console.log('after environment is finished');
        console.log(env);
        
    });
});



