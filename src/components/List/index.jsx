import styles from './style.module.css';
import noCard from '../../assets/NoCard.svg'
import Font from 'react-font'
import Card from '../Card';
import { useState } from 'react';

function List({list, setList, setFilter, filter}){

    function handleFilter(filterName, elemento){

        if(filterName === 'all'){
            setFilter([...list])
            
        } else {
            const filteredList = list.filter(trans => trans.type === filterName);  
            
            setFilter([...filteredList])
        }

    }

    return (
        
            <ul className={styles.listContainer}>
                
                <div className={styles.titleButtonsContainer}>
                    <h3 className={styles.listTitle}>Account activity</h3>
                    <div className={styles.filterButtonsContainer}>
                        <button className={styles.allTranscButton} onClick={(event) => handleFilter('all', event.target)} >All</button>
                        <button className={styles.depositsButton} onClick={(event) => handleFilter('deposit', event.target)} data-id='deposit' >Deposits</button>
                        <button className={styles.expensesButton} onClick={() => handleFilter('expense')} >Expenses</button>
                    </div>
                </div>

                {!list.length > 0 
                    ? 
                    (<>
                        <h2>You don't have any transactions yet.</h2>
                        <img src={noCard} alt="No cards image" />
                    </>)
                    :
                    filter.map((item) => <Card {...{...item, setList, list, setFilter}} key={item.id}/>)
                }
                
                
            </ul>
        
    )
}

export default List;