import styles from './style.module.css';
import logo from '../../assets/logo.svg';

function LandingPage() {
    return (
        <div className={styles.landingPageContainer}>
            <div className={styles.topContainer}>
                <img src={logo} alt="Nu Kenzie logo" />

                <h1>Centralize control of your finances</h1>

                <p>in a faster and secure way</p>
                
                <button type='button'>Start</button>
            </div>
            <div className={styles.bottomContainer}>
                
            </div>
        </div>
      
        
            
       
    )
}

export default LandingPage;