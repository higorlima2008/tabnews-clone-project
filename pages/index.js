import React, { useState } from 'react';

function Count (){
    const [contador, setContador] = useState(0);
    
    const Click = () => {
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={Click}>isso é o auge da alucinação!!</button>
        </div>
    )
}

function Home(){
    return <Count/>
}

export default Home;