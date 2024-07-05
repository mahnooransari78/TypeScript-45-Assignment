function sandwiches(...items:string []) {
    console.log("Sandwiches order");

    for( let i = 0; i < items.length; i++){
        console.log(`${items[i]}`);
        
    }
    
}
console.log("Enjoy your sandwich Mahnoor");

sandwiches('capsicum','tomato', 'chickes')
sandwiches('beef', "cheese")
sandwiches('mayo sauce','chilli garlic ketchup')