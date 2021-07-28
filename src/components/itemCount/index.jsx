
import { useState } from 'react';

export const ItemCount = () => { 
 
              
    let [contador, setContador] = useState(1);

   
   return (
      
                <section>
                <button onClick={() => {setContador(contador-1)}}>-</button>
                {contador}
                <button onClick={() => {setContador(contador+1)}}>+</button>
            </section>

       )
}