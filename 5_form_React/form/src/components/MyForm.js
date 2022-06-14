import styles from "./MyForm.css";
import {useState} from "react";

const MyForm = ()=>{

    const [name, setName] = useState();
    const [Email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name);

    return(
        <>
            <form>
                <div className="form-control">
                    <label htmlFor="name">Nome:</label>
                    <input onChange={handleName} type="text" name="name" placeholder="Digige seu nome"/>
                </div>
                {/* label envolvendo o input*/}
                <div className="form-control">
                    <label>
                        <span>E-mail</span>
                        <input type="e-mail" placeholder="Digite seu email"/>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </>
    )
}

export default MyForm;