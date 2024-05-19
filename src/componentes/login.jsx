import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { NombreContexto} from './Contexto'

export function LogIn() {
   const {handleChange, enviacredencialesAWS, setIsLoggedIn,user,pass} = useContext(NombreContexto)
   const nav = useNavigate();

  const handleSubmit = async event => {
     event.preventDefault()

    const retorna= await enviacredencialesAWS(user, pass)
    console.log("Esto es retorna ",retorna)

     if(retorna == true){
      setIsLoggedIn(true)
     }else{setIsLoggedIn(false)}

     nav('/rutaCompo1');
   };    

   return (
    <div className={'mainContainer'}>
  +
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>

      <form onSubmit={handleSubmit}>
        <label className='username'>
            Username:
            <input className={'inputContainer'}
              type="text"
              name="username"
              placeholder='Ingrese tu username weon'
              onChange={handleChange}
            />
        </label>
        <label className='password'>
            Password:
            <input className={'inputContainer'}
              type="password"
              name="password1"
              placeholder='ingrese su password'
              onChange={handleChange}
            />
        </label>

        <input className='bgrhb' type='submit' ></input>

      </form >

   </div>
   )

}

