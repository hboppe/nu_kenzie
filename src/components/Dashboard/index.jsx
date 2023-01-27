import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";
import styles from './style.module.css'


function Dashboard({click}){
    return (
        <>
            <Header click={click}/>

            <main className={styles.mainContainer}>
                <div className={styles.formTotalContainer}>
                    <Form/>
                    <TotalMoney/>
                </div>

                <List/>
            </main>

        </>
        
    )
}

export default Dashboard;