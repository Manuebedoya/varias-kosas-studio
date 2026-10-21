import { buscarUsuario } from "../models/UsuarioModel.js";
import { generaAlert } from "../helpers/alerts.js";

function iniciarSesion(){
    let correo = document.querySelector("#correo").value
    let contrasena = document.querySelector("#clave").value
    let auth = buscarUsuario(correo, contrasena)
    if (auth){
        generaAlert("Bienvenido al Sistema", "Será redireccionado al catalogo de cosas", "success")
        setTimeout(()=>{
            return window.location.href = "/views/pages/cosas-view-catalogo.html"

        }, 3000)
        return window.location.href = "/views/pages/cosas-view-catalogo.html"
    }
    generaAlert("Error", "Usuario y/o contraseña incorrectos", "error")
    setTimeout(()=>{
        return window.location.href = "/views/pages/cosas-view-catalogo.html"
    }, 3000)
    return window.location.href = "./index.html"
}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion)

