function city_country(city, country) {
    return "\"".concat(city, " , ").concat(country, "\"");
}
;
city_country("Karachi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Seoul", "Korea"));
