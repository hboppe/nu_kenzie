import styles from './style.module.css';
import noCard from '../../assets/NoCard.svg'
import Font from 'react-font'

function List({list}){
    return (
        
            <ul className={styles.listContainer}>
                <Font family='Nunito'>
                    <h3>Account activity</h3>
                    {!list.length > 0 
                        ? 
                        (<>
                            <h2>You don't have any transactions yet.</h2>
                            <img src={noCard} alt="No cards image" />
                        </>)
                        :
                        list.map(({transaction, amount, id, type}) => (<li key={id}> {transaction} {amount} {type}</li>))}
                </Font>
                
            </ul>
        
    )
}

export default List;