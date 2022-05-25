import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name] = useState("Jhonatan");

  return (
    <div>
        <h1>Isto será exibido!</h1>
        {x && <p>Se x for verdadeiro</p>}
        {!x && <p>Se x for falso</p>}

        <h1>If ternário</h1>

        {name === "Jhonatan" ? (
            <div>
                <p>Meu nome é Jhonatan</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender