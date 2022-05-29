const MessageAlter = ({msgFunction})=>{

    const salutation = ["Ola","Oi", "Tudo bem"];
    return(
        <div>
           <button onClick={()=> msgFunction(salutation[0])}>1</button>
           <button onClick={()=> msgFunction(salutation[1])}>2</button>
           <button onClick={()=> msgFunction(salutation[2])}>3</button>
        </div>
    )
}

export default MessageAlter;