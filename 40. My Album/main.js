function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Suga", "D-Day");
var album2 = myAlbum("Joen Junkook", "Golden");
var album3 = myAlbum("V", "layover");
console.log(album1);
console.log(album2);
console.log(album3);
//                  ---- NUMBER OF TRACKS ----
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Suga", "D-Day", 10);
var album5 = myAlbum2("Joen Junkook", "Golden", 11);
var album6 = myAlbum2("V", "layover", 7);
console.log(album4);
console.log(album5);
console.log(album6);
