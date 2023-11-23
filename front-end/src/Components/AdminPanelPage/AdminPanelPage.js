import React, {useState} from 'react';
import styles from './AdminPanelPage.module.css'
import AddCategory from "./AddCategory/AddCategory";


const AdminPanelPage = () => {
    const [currentSection,setCurrentSection] = useState(null);

    return (
        <main className={styles.admin_panel_wrapper}>
            <section className={styles.sidebar_wrapper}>
                <ul>
                    <li onClick={()=>setCurrentSection(<AddCategory/>)}>Категорії</li>
                    <li>Постачальники</li>
                    <li>Додати товар</li>
                    <li>Замовлення</li>
                </ul>
            </section>
            {currentSection ? currentSection : <h1>Виберіть пункт меню</h1>}
        </main>

    );
};

export default AdminPanelPage;