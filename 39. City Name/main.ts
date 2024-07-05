function city_country(city : string , country : string ){
    return `"${city} , ${country}"`;
};

 city_country("Karachi","Pakistan");
 let mycities =  city_country("Karachi","Pakistan");

console.log(mycities);
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Dubai","UAE"));
console.log( city_country("Seoul","Korea"));