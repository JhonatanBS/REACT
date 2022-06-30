import styles from "./Header.module.css";

import igniteLogo from "../assets/img/igniteLogo.svg"

export function Header(){
   return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do ignite" />
        </header>
    
   )
}

