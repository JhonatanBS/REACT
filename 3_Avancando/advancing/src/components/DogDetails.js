const DogDetails = ({name,breed,color,kg, newDog})=>{

    return(
        <div>
            <h1>Detalhes do Cachorro</h1>
            <ul>
                <li>Nome: {name}</li>
                <li>Raça: {breed}</li>
                <li>cor: {color}</li>
                <li>kg: {kg}</li>
            </ul>
            {newDog && <p>O cachorro é filhote</p>}
        </div>
    )
}

export default DogDetails;