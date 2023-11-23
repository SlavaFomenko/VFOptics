import React from 'react';
import styles from './AddCategory.module.css'
import CategoryCard from "./CategoryCard/CategoryCard";

const AddCategory = () => {
    return (
        <section className={styles.add_section_wrapper}>
            <div>
                <h2>Додати категорію</h2>
                <form className={styles.className_form}>
                    <input placeholder={'Назва категорії'}/>
                    <input placeholder={'Опис категорії'}/>
                    <button type={'button'}>Додати категорію</button>
                </form>
            </div>
            <div>
                <h2>Категорої</h2>
                <ul>
                    <CategoryCard/>
                </ul>
            </div>
        </section>
    );
};

export default AddCategory;