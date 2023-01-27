import Form from "../Form";
import Header from "../Header";
import TotalMoney from "../TotalMoney";
import styles from './style.module.css'


function Dashboard({click}){
    return (
        <>
            <Header click={click}/>

            <main className={styles.mainContainer}>
                <Form/>
                <TotalMoney/>
            </main>

        </>
        
    )
}

export default Dashboard;