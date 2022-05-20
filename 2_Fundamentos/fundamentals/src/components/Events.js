const Events = ()=>{
    const handleMyEvent = (e)=>{
        console.log(e);
        console.log("Botão ativado com sucesso!")
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events;