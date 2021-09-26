
setTimeout(() => {
    console.log(2);
    
}, 400);

console.log(1); 


const getUser = whattodonext =>{            //whattodonext is the Callback (a parameter to be received)
    setTimeout(() => {
        console.log('this runs first!');
        whattodonext('User is Juan');
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



