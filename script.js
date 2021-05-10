function calculate() {

    //fetch('items.json')   An example of get request

    fetch('items.json').then(res => console.log(res));


    // This runs asynchronslly, which means it runs in the background and it returns a promise. 

    // The way we catch a promise is .then
    // The .then will give us a response. 

}

calculate();