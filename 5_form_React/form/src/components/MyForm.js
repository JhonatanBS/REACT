import styles from "./MyForm.css";

const MyForm = ()=>{

    return(
        <>
            <form>
                <div className="form-control">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </>
    )
}

export default MyForm;