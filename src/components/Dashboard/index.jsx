import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";
import styles from './style.module.css'
import { useState } from "react";
import Font from "react-font";


function Dashboard({click}){
    const [list, setList] = useState([{transaction: 'teste', amount: 34, type: 'expense', id: 'df3ade1e-bf8a-43b6-8513-634959ca5b86'}]);

    return (
        <>
            <Font family="Nunito">
                <Header click={click}/>
                <main className={styles.mainContainer}>
                    <div className={styles.formTotalContainer}>
                        <Form setList={setList} list={list}/>
                        {list.length > 0 && <TotalMoney list={list}/>}
                    </div>
                    <List list={list}/>
                </main>
            </Font>

        </>
        
    )
}

export default Dashboard;