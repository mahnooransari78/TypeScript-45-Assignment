function show_magicians(magicians : string []) {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician : string [] = ["ali","Dua","fariha"];
show_magicians(magician)