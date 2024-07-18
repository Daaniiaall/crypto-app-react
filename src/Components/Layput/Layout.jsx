import { FaHeart } from "react-icons/fa6";

import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <p>
                <a href="https://github.com/Daaniiaall">Danial Momenpour</a> | React.js
            </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed with <FaHeart /></p>
        </footer>
    </>
  )
}

export default Layout