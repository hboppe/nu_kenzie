import Header from "../Header";
import styles from './style.module.css'


function Dashboard({click}){
    return (
        <div className={styles.dashboardContainer}>
            <Header click={click}/>
        </div>

        
    )
}

export default Dashboard;