const DogDetails = ({name,breed,color,kg})=>{

    return(
        <div>
            <h1>Detalhes do Cachorro</h1>
            <ul>
                <li>Nome: {name}</li>
                <li>Raça: {breed}</li>
                <li>cor: {color}</li>
                <li>kg: {kg}</li>
            </ul>
        </div>
    )
}

export default DogDetails;