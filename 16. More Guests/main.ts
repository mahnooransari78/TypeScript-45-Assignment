
let guest_list : string [] =['Ali','Dua','fariha','shahnaz'];


let new_guest : string = 'Bilal';


guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    
    console.log('respected sir/Madam '+ guest_list[i] + ',\nwe invited you on dinner tomorrow.\n');
    
}
guest_list.unshift('Nameera','Haris','Abdullah','Abdullhadi','Abdullwasay');

guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){

    console.log('respected sir/Madam '+ guest_list[i] + ',\nwe invited you on dinner tomorrow.\n');
    
}