//  To Lower Case:
let personName : string ="Mahnoor";
console.log("lowercase:", personName.toLowerCase());

// To Upper Case:

console.log("uppercase:", personName.toUpperCase());

// T Tittle Case:

console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));