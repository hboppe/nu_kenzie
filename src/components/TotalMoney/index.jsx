import styles from './style.module.css';
import Font from 'react-font';

function TotalMoney(){
    return  (
        <Font family='Nunito'>
            <section className={styles.totalMoneyContainer}>
                <div className={styles.topContainer}>
                    <h3>Total amount:</h3>
                    <p>The total refers to the balance</p>
                </div>
                <span>$ 1.500</span>
            </section>
        </Font>
    )
}

export default TotalMoney;