import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
  return (
    <div>
        <h1>Isto será exibido!</h1>
        {x && <p>Se x for verdadeiro</p>}
        {!x && <p>Se x for falso</p>}
    </div>
  )
}

export default ConditionalRender