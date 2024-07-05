var guest_list = ["Fariha", "Dua", "Ali", "Shahnaz"];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you! :)\n');
}
var not_coming = 'fariha';
var new_guest = ' baber Azam';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you! :)\n');
}
console.log("Mr. ".concat(not_coming, " will not coming tomorrow dinner. :("));
