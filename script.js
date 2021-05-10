function calculate() {

    //fetch('items.json')   An example of get request

    fetch('items.json')
        .then(res => res.json())
        .then(data => console.log(data));


    // This runs asynchronslly, which means it runs in the background and it returns a promise. 

    // The way we catch a promise is .then
    // The .then will give us a response. 

    // 200 status means it is working perfectly. 
    //300 is redirect 
    //400 is user error
    //500 is server error 

}

calculate();