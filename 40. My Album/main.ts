function myAlbum(artistName:string , albumTitle : string) {
    return{artistName , albumTitle}
}

let album1 = myAlbum("Suga" , "D-Day");
let album2 = myAlbum("Joen Junkook" , "Golden");
let album3 = myAlbum("V" , "layover");

console.log(album1);
console.log(album2);
console.log(album3);
//                  ---- NUMBER OF TRACKS ----

function myAlbum2(artistName:string , albumTitle : string , numberOfTracks : number) {
    return{artistName , albumTitle , numberOfTracks}
}

let album4 = myAlbum2("Suga" , "D-Day",10);
let album5 = myAlbum2("Joen Junkook" , "Golden",11);
let album6 = myAlbum2("V" , "layover",7);

console.log(album4);
console.log(album5);
console.log(album6);
