import styles from './style.module.css';
import noCard from '../../assets/NoCard.svg'
import Font from 'react-font'
import Card from '../Card';

function List({list, setList}){
    return (
        
            <ul className={styles.listContainer}>
                
                <h3 className={styles.listTitle}>Account activity</h3>
                {!list.length > 0 
                    ? 
                    (<>
                        <h2>You don't have any transactions yet.</h2>
                        <img src={noCard} alt="No cards image" />
                    </>)
                    :
                    list.map((item) => <Card {...{...item, setList}} key={item.id}/>)
                }
                
                
            </ul>
        
    )
}

export default List;