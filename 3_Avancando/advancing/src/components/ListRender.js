import { useState } from "react";

const ListRender = ()=>{
    const [list] = useState(["Joana", "Lucas", "Paulo", "Matheus"]);

    return(
        <div>
          <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
          </ul>
        </div>
    )
}

export default ListRender;