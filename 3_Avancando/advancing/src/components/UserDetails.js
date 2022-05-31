const UserDetails = ()=>{

    const users = [
        {id:1, name: "Mateus",age:16,profession:"Estagiário"},
        {id:2, name: "Lucas",age:25,profession:"Engenheiro"},
        {id:3, name: "Ana",age:30,profession:"Design"},
        {id:4, name: "Joana",age:28,profession:"Professora"},
    ];
    return(
        <div>
           {users.map((user)=>(
               user.age >= 18 ? 
               <p key={user.id}>{user.profession} {user.name} tem {user.age} anos, por isso está habilitado para tirar a carteira de motorista</p> : 
               <p key={user.id}>{user.profession} {user.name} tem {user.age} anos, por isso não está habilitado para tirar a carteira de motorista</p>
           ))}
        </div>
    )
}

export default UserDetails;