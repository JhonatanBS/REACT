const Events = ()=>{
    const handleMyEvent = (e)=>{
        console.log(e);
        console.log("Botão ativado com sucesso!")
    }

    const renderSomething = (x)=>{
       if(x){
           return <h1>Renderize isso aqui</h1>
       }else{
           return <h2>Renderize isso caso seja falso</h2>
       }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

            <div>
                <button onClick={()=> console.log("Clicou outra vez")}>Clique de novo</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;