import styles from "./Header.module.css";
import Logo from "../assets/img/Logo.svg";


export function Header() {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="" />
    </header>
  )  
}