var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function creatCar(manufacture, model, optinal) {
    return __assign({ manufacture: manufacture, model: model }, optinal);
}
var mycar = creatCar("Honda", "Civic", { color: "black", year: "2024" });
console.log(mycar);
