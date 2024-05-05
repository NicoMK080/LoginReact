import {useContext} from 'react' 
import { NombreContexto } from './Contexto'
import { Precio } from './precio'
import { enCompra } from './carrito'
import { NavLink } from 'react-router-dom'



export function Compo2() {
    const {sube, borrar, conta, Precio1, Precio2, Precio3, Arreglo, carrito,  recibeCompra} = useContext(NombreContexto)

    return (
        <div className='compo2'>

            <div className='comprable'>
                {Arreglo.map((esto)=><Precio  a = {esto}/>)}
            </div>

            <div className='enCarrito'>

                <div className='MenuComprar'>
                    <h1 className='titulo'>El Total es ${conta}</h1>

                    { conta == 0 ? <></> :
                        <NavLink to= '/comprar'>
                            <button className='botonComprar'> Voy a comprar</button>
                        </NavLink> 
                    }
                    

                </div>

                {carrito.map((h)=>(enCompra(h.a)))}
            </div>
            
        </div>
    )
}