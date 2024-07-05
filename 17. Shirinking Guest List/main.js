var guest_list = ['Ali', "Dua", 'Fariha', 'Ashir'];
var new_guest = 'Haris';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respested sir/Madam '+ guest_list[i] + ',\n invited you on dinner tomorrow. \n\tThsnk you');
// }
guest_list.unshift('Nameera', 'Abdullhadi');
console.log('\nUnforturntely we can not arrange big table , Only too people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guest, " \nYou are not invited for dinner,"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respested sir/Madam ' + guest_list[i] + ',\n Yes you are still invited on tomorrow dinner. \n\tThank you');
}
guest_list.slice(2);
console.log(guest_list);
