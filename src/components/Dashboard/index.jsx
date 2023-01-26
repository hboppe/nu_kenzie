import Form from "../Form";
import Header from "../Header";
import styles from './style.module.css'


function Dashboard({click}){
    return (
        <>
            <Header click={click}/>

            <main className={styles.mainContainer}>
                <Form/>
                <section className={styles.totalMoney}>

                </section>
            </main>

        </>
    

        
    )
}

export default Dashboard;