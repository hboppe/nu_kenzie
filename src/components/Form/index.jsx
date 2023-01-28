import styles from './style.module.css'
import Font from 'react-font';
import { useState } from 'react';
import {v4 as id} from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({setList, list}) {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('')

    const showSuccessMessage = () => {
        toast.success('A new transactin was added to your account', {
            position: "top-right",
            autoClose: 3000
        })
    }

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
        setType('')
        showSuccessMessage()
    }

    return (
        
            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <Font family='Inter'>
                    <div className={styles.descriptionContainer}>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" placeholder="Add a description" value={transaction} onChange={(event) => setTransaction(event.target.value)} required/>
                        <small>Ex: clothes shop</small>
                    </div>
                    <div className={styles.amountAndTypeContainer}>
                        <div className={styles.amountContainer}>
                            <label htmlFor="amount">Amount</label>
                            <div className={styles.inputAmountContainer}>
                                <input type="number" name="amount" id="amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))} required/>
                                <span className={styles.dollarSymbol}>U$</span>
                            </div>
                        </div>
                        <div className={styles.typeContainer}>
                            <label htmlFor="type">Type</label>
                            <select  name="type" id="type" value={type} onChange={(event) => setType(event.target.value)} required>
                                {/* <option disabled value>Selecione</option> */}
                                <option value="" disabled>Select a type</option>
                                <option value="deposit">Deposit</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className={styles.addTransactionButton}>Add transaction</button>
                    <ToastContainer />
                </Font>

            </form>
        
        
    )
}

{/* <select  name="type" id="type" required value={type} onChange={(event) => setType(event.target.value)}></select> */}
export default Form;