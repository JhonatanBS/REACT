import { useState } from "react";

const ListRender = ()=>{
    const [list] = useState(["Joana", "Lucas", "Paulo", "Matheus"]);

    const [users] = useState([
      {id: 1, name: "Jhonatan", age: 29},
      {id: 2, name: "Paulo", age: 25},
      {id: 3, name: "Lucas", age: 40},
      {id: 4, name: "Marcos", age: 18},
    ]);

    return(
        <div>
          <ul>
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
          </ul>

          <div>
            <ul>
              {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
              ))}
            </ul>
          </div>
        </div>

        
    )
}

export default ListRender;