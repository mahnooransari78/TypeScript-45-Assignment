

let guest_list : string [] = ['Ali',"Dua",'Fariha','Ashir'];

let new_guest :string = 'Haris';

guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respested sir/Madam '+ guest_list[i] + ',\n invited you on dinner tomorrow. \n\tThsnk you');
    
// }
guest_list.unshift('Nameera','Abdullhadi',);

console.log('\nUnforturntely we can not arrange big table , Only too people allow.');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} \nYou are not invited for dinner,`)
}
for(let i=0; i<guest_list.length; i++){
        console.log('Respested sir/Madam '+ guest_list[i] + ',\n Yes you are still invited on tomorrow dinner. \n\tThank you');
         }
guest_list.slice(2);
console.log(guest_list)