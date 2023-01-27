import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";
import styles from './style.module.css'
import { useState } from "react";


function Dashboard({click}){
    const [list, setList] = useState([]);

    return (
        <>
            <Header click={click}/>

            <main className={styles.mainContainer}>
                <div className={styles.formTotalContainer}>
                    <Form setList={setList} list={list}/>

                    {list.length > 0 && <TotalMoney list={list}/>}
                </div>
                <List list={list}/>
            </main>

        </>
        
    )
}

export default Dashboard;