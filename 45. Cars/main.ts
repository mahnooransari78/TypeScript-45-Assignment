type car = {
    manufacture : string,
    model : string,
    [key : string ]:any ;
}

function creatCar(
    manufacture:string,
    model : string,
    optinal : Record<string ,any>
){
    return {
        manufacture,
        model,
        ...optinal
    }
}
const mycar : car = creatCar("Honda","Civic",{color : "black", year : "2024"})
console.log(mycar);
