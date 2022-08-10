let nombre_apellidos = () => {
    let nombre = "Noèlia";
    let apellidos = "Llobera Sànchez";
    return `${nombre} ${apellidos}`
}
console.log(nombre_apellidos());

let funcion_boleano = (boleano) => {
    console.log(boleano);
}
funcion_boleano(true);

let funcion_infinito = (...params) => {
    params.forEach(item => {
        console.log(item);
    });
};
funcion_infinito(1,2,3,4,5);