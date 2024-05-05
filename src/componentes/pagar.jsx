import { useContext } from "react"
import { NombreContexto } from './Contexto'
import Banco from '../assets/Imagenes/Banco.png'
import { NavLink } from 'react-router-dom'

export function Pay(valor) {
    const {sube, Carrito, conta, Arreglo, recibeCompra, isLoggedIn} = useContext(NombreContexto)
    const m= Banco
    return (

    <div>

      {isLoggedIn
        
        ? 

        <div className="fondoPagar">
            <h5 className="tituloPagar">El total es {conta}</h5>
            <img className="imagenPagar"  src={m} alt="" />
            <button className="pagar" onClick={()=>{recibeCompra(14)}}>
                Pagar 
            </button>

            <NavLink to= '/rutaCompo1'>
                <button className="regresar"> Regresar</button>
            </NavLink>

        </div>

        : 
        
        <div>
        <h1>No permitido</h1>
        </div>
      }

    </div>


        
    )
}