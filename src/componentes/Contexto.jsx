import { createContext , useState } from 'react'

export const NombreContexto = createContext()

export function Contexto(props) {
    const x=30
    const Precio1 = 100
    const Precio2 = 200
    const Precio3 = 300
    const Arreglo = [1299, 1099, 2149]
    let Carrito = []
    const [conta, setConta]= useState(0)
    const [carrito, setCarrito]= useState(Carrito)
    const [user, setUser]= useState('')
    const [pass, setPass]= useState('')

    
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    function sube(a) {
      setCarrito([...carrito,{a:a}])
      setConta(conta + a)
    }

    function recibeCompra(a) {
     console.log("Esto es a ", a)
    }

    const URL= import.meta.env.VITE_URL || "http://localhost:5173"

    async function enviacredencialesAWS(usuario, clave){
      console.log("Llegue a la funcion enviacredencialesAWS", usuario)
                  
      let salida="nada"
      await fetch(`${URL}`, {
        method: 'POST',
        // headers: {'Content-Type':'application/json'},}}
        body: JSON.stringify({
          "user": usuario,
          "password": clave
         })

      })
      .then(response => response.json())
      .then(data => salida=data)
      .catch(error => console.error(error));


      console.log('egr=',salida)

      return salida
    }

    function baja(a) {
      //setCarrito([...carrito,{a:a}])
      setConta(conta - a)
    }

    function borrar(b) {
      baja(b)
      let otro = []
      console.log("Este es carrito: ", carrito)
      carrito.map((g)=>{
        console.log("Este es g.a: ", g.a)
        if(g.a!=b){ 
          otro.push(g)
        } 
      })
    console.log("Este es otro: ", otro)
      setCarrito(otro)
    }


    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;

        if(event.target.name == 'password1'){
          setPass(event.target.value)
        }

        if(event.target.name == 'username'){
          setUser(event.target.value)
        }
    };

  return (
    <NombreContexto.Provider value={{ enviacredencialesAWS, x, sube, borrar, conta, Precio1, Precio2, Precio3, Arreglo, carrito, handleChange, user, pass,isLoggedIn, recibeCompra, setIsLoggedIn}} >
        {props.children}
    </NombreContexto.Provider>
  )
}

