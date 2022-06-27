import {useState} from "react";

const ManageData = ()=>{
   let [number, setNumber] = useState(30);

   const alter = ()=> number <= 30 ? setNumber(50) : setNumber(22);
   
   return(
       <div>
           <p>Number: {number}</p>
           <button onClick={alter}>Cique aqui</button>
       </div>
   )
}

export default ManageData;