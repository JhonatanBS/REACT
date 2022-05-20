const Challenge = ()=>{

    const numberOne = 30;
    const numberTwo = 50;
    
    const sum = ()=> console.log(numberOne + numberTwo);
      
    return(
        <div>
        <div>Primeiro valor: {numberOne}</div>
        <div>Segundo valor: {numberTwo}</div>    
        <button onClick={sum}>Clique para somar os valores</button>
        </div>
    )
}

export default Challenge;