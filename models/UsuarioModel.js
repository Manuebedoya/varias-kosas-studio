const usuarios =[
    {
        nombre: "Manuela Bedoya Noreña",
        telefono: "3046644954",
        correo: "manuebedoya94@gmail.com",
        contrasena: "1234567890",
        id: "1152450955"
    },
    {
        nombre: "Jaime Zapata Valencia",
        telefono: "3058577315",
        correo: "correo@correo.com",
        contrasena: "id1234567890",
        id: ""
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.some((usuario) => correo == usuario.correo && contrasena== usuario.contrasena)
    return auth
}

