const Container = ({children},{myValue})=>{

    return(
        <div>
            <h1>Isso será exibido</h1>
            {children}
            <p>Teste {myValue}</p>
        </div>
        
    )
}

export default Container;