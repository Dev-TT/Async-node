
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
    setTimeout(() => {
        console.log('this runs first!');
        getEnvironment(environment =>{
            whattodonext('User is Juan with: /'+ environment);
        });
    }, 1000);
};


getUser(user =>{                            //ENTRY POINT
    console.log('this runs last');          // This is the callback definition
    console.log(user);
});



// executes getUser()
// does everything inside getUser
// then GetUser executes the Callback function whattodonext, 
// which is defined in the below code



