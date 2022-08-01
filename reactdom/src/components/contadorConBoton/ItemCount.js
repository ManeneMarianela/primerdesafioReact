import {useState} from 'react';

function ItemCount () {
    const [contador, setContador]= useState(0);


function agregarAlContador (){
    const increase =() =>setContador (contador +1);
    const decrement =() =>setContador (contador -1);
    const reset =() =>setContador (0)
    const stock =() => setContador (25)
    console.log(contador)

}
  return (
    <div>
      <p>
        {contador}
      </p>
      <br/>
      <button onClick={agregarAlContador}>Agregar al contador 1</button>
    </div>
  )
}

export default ItemCount;
