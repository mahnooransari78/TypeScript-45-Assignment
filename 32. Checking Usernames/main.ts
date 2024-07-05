let current_users : string [] = ["ali","dua","fariha","sabir","nameera"];
let new_users : string [] = ["sabir","user12","user6","admin","user10"];

new_users.forEach((newUser)=>{

if (
        current_users.some((currentUsers) => currentUsers.toLocaleLowerCase() === newUser.toLowerCase())
    )
{
    console.log(`${newUser} will need to enter a new username,`);

} else {
    console.log(`${newUser} is available.`);
    
}
});