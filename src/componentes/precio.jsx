import { useContext } from "react"
import { NombreContexto } from './Contexto'
import Imagen1 from '../assets/Imagenes/Imagen1.jpg'
import Imagen2 from '../assets/Imagenes/Imagen2.png'
import Imagen3 from '../assets/Imagenes/Imagen3.jpg'

export function Precio(valor) {
    const {sube, Carrito, Arreglo} = useContext(NombreContexto)
    let tituloProductos
    let m
    if (valor.a == Arreglo[0]) {
        m=Imagen1
        tituloProductos= "Lacteos"
    }
    if (valor.a == Arreglo[1]) {
        m=Imagen2
        tituloProductos="Comida"
    }
    if (valor.a == Arreglo[2]) {
        m=Imagen3
        tituloProductos = "Detergente"
    }
    return (
    <div className="contenedorBotones">
        <h5 className="tituloProductos">{tituloProductos}</h5>
        <div className="contenedorImagenesComprable">
            <img className="Imagenes"  src={m} alt="" />
        </div>
        <button className="botonesCompra" onClick={()=>{
            sube(valor.a)
        }}>
                {valor.a}
        </button>
    </div>)
}