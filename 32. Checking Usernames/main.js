var current_users = ["ali", "dua", "fariha", "sabir", "nameera"];
var new_users = ["sabir", "user12", "user6", "admin", "user10"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) { return currentUsers.toLocaleLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username,"));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
