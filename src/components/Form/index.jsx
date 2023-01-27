import styles from './style.module.css'
import Font from 'react-font';
import { useState } from 'react';
import {v4 as id} from 'uuid';

function Form({setList, list}) {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('')

    function handleSubmit(event){
        event.preventDefault();

        const newTransaction = {
            transaction,
            amount, 
            type,
            id: id()
        }
        setList((oldValues) => [...oldValues, newTransaction]);
        setTransaction('');
        setAmount('')
        console.log(newTransaction)
        
    }

    return (
        
            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <Font family='Inter'>
                    <div className={styles.descriptionContainer}>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" placeholder="Add a description" value={transaction} onChange={(event) => setTransaction(event.target.value)}/>
                        <small>Ex: clothes shop</small>
                    </div>
                    <div className={styles.amountAndTypeContainer}>
                        <div className={styles.amountContainer}>
                            <label htmlFor="amount">Amount</label>
                            <div className={styles.inputAmountContainer}>
                                <input type="number" name="amount" id="amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>
                                <span className={styles.dollarSymbol}>U$</span>
                            </div>
                        </div>
                        <div className={styles.typeContainer}>
                            <label htmlFor="type">Type</label>
                            <select name="type" id="type" required value={type} onInput={(event) => setType(event.target.value)}>
                                {/* <option disabled value>Selecione</option> */}
                                <option value="deposit">Deposit</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit'>Add transaction</button>
                </Font>

            </form>
        
        
    )
}

export default Form;