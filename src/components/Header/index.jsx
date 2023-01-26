import logo from '../../assets/dark-logo.svg'
import styles from './style.module.css';

function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.navContainer}>
                <img src={logo} alt="Nu Kenzie logo" />
                <button className={styles.homeButton}>Home</button>
            </nav>
        </header>
    )
}

export default Header;