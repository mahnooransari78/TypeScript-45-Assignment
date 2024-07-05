function show_magicians(magicians : string [] ) {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        
    }
}
function make_great(magicians:string []) {
    for(let i=0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " The great"
    }
}

function make_great2(magicians: string []) {
    const greatMagicians : string[] = [];
    for (let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}
const magicians : string [] = ["Shafat","humza","sufiyian"];
const magicians2 : string [] = make_great2(magicians);
show_magicians(magicians);
show_magicians(magicians2)