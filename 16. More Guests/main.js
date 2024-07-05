"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ['Ali', 'Dua', 'fariha', 'shahnaz'];
var not_present = 'shahnaz';
var new_guest = 'Bilal';
console.log("".concat(not_present, " shahnaz is not coming tomorrow"));
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n');
}
guest_list.unshift('Nameera', 'Haris', 'Abdullah', 'Abdullhadi', 'Abdullwasay');
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n');
}
