import { useContext } from "react"
import { NombreContexto } from './Contexto'
import Imagen1 from '../assets/Imagenes/Imagen1.jpg'
import Imagen2 from '../assets/Imagenes/Imagen2.png'
import Imagen3 from '../assets/Imagenes/Imagen3.jpg'


export function enCompra(valor) {
    const {borrar, Arreglo} = useContext(NombreContexto)
    let tituloProductos
    let m
    if (valor == Arreglo[0]) {
        m=Imagen1
        tituloProductos= "Lacteos"
    }
    if (valor == Arreglo[1]) {
        m=Imagen2
        tituloProductos="Comida"
    }
    if (valor == Arreglo[2]) {
        m=Imagen3
        tituloProductos = "Detergente"
    }

    return (

        <div className='contenedorCarrito'>
            <h5 className="tituloCarrito" >{tituloProductos}</h5>
            <div className="contenedorImagenes">
                <img className="imagenesCarrito" src={m} alt="" />
            </div>
            <button className='precio'>{valor}</button>
            <button className='borrarProducto' onClick={()=>{
                 borrar(valor)
                }}>
                Borrar
            </button>
        </div>

    )}