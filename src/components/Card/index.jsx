import styles from './style.module.css';
import { MdDelete } from 'react-icons/md';
import Font from 'react-font'

function Card({transaction, amount, id, type}){
    return (

        
            < li className={`${styles.cardContainer} ${type==='deposit' && styles.depositType}`}>
            
                <div className={styles.topContainer}>
                    <h3>{transaction.toLowerCase()}</h3>
                    <small className={styles.transactionType}>{type}</small>
                </div>
                <span className={styles.amount}>U$ {amount}</span>
                <button id={id} className={styles.deleteButton}><MdDelete/></button>
            
            </li>
        
    )
}

export default Card;