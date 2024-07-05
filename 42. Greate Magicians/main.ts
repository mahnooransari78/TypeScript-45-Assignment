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

const magicians : string [] = ["ali", "dua","fariha"];
make_great(magicians)
show_magicians(magicians)