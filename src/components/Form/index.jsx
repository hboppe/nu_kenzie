import styles from './style.module.css'
import Font from 'react-font'

function Form() {
    return (
        <Font family='Inter'>
            <form className={styles.formContainer}>

                <div className={styles.descriptionContainer}>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" placeholder="Add a description"/>
                    <small>Ex: clothes shop</small>
                </div>
                <div className={styles.amountAndTypeContainer}>

                    <div className={styles.amountContainer}>
                        <label htmlFor="amount">Amount</label>
                        <div className={styles.inputAmountContainer}>
                            <input type="number" name="amount" id="amount" />
                            <span className={styles.dollarSymbol}>U$</span>
                        </div>
                    </div>

                    <div className={styles.typeContainer}>
                        <label htmlFor="type">Type</label>
                        <select name="type" id="type" required>
                            <option value="deposit">Deposit</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>Add transaction</button>

            </form>
        </Font>
        
    )
}

export default Form;