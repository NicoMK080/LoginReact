import { NavLink } from 'react-router-dom'
import { Compo2 } from './compo2'
import {useContext} from 'react' //cambio 2
import { NombreContexto } from './Contexto'//cambio

export function Compo1() {

    const {isLoggedIn} = useContext(NombreContexto)
    
    return (
    <div>

      {isLoggedIn
        
        ? 

        <div>
            <Compo2/>
              <NavLink to= '/rutaMarco'>
                <button> Voy a Marco</button>
              </NavLink>
        </div>

        : 
        
        <div>
        <h1>No permitido</h1>
        </div>
      }

    </div>)
}
