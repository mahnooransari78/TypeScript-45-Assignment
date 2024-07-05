let guest_list : string[] = [`Fariha`,`Dua`,`Ali`,`Shahnaz`];
for( let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you! :)\n');
}
let not_coming : string = 'fariha';
let new_guest : string = ' baber Azam';
guest_list[0] = new_guest;
for( let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you! :)\n');
}
console.log(`Mr. ${not_coming} will not coming tomorrow dinner. :(`);