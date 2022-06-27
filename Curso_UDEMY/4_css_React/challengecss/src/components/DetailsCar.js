import styles from "./DetailsCar.module.css"

const DetailsCar = ({carDetail})=>{

    return(
        <div>
        {carDetail.map((car)=>(
            <div key={car.id}>
                <img src={car.image} alt="carro" />
                <h2>Marca: {car.brand} Modelo:{car.model}</h2>
                <p>Cor: {car.color}</p> 
            </div>
        ))}
        </div>
    )
}

export default DetailsCar;