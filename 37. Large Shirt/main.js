function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
