import { useState } from "react";

function Home() { 
    return(
        <div>Homer

            <Contador/>
        </div>
        
    )
    
 }

 function Contador() {
    const [contador, setContador] = useState(1);
    function AddCount() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={AddCount}>Adicionar</button>
        </div>
    )
}
export default Home