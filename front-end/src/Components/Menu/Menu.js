import React, { useEffect } from 'react';
import styles from './Menu.module.css'

const Menu = ({refs, onHideMenu }) => {
    useEffect(() => {
        const documentClickHandler = (e) => {
            console.log(e.target )
            console.log(refs.menuBtn)
            console.log('info = ' + refs.menuBtn !== e.target)
            if (refs.menuBtn.current !== e.target&& refs.menuRef.current && !refs.menuRef.current.contains(e.target)) {
                console.log('hello me')
                onHideMenu();
            }
        };

        document.addEventListener('click', documentClickHandler);

        return () => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, [onHideMenu]);

    // Остальной код вашего компонента Menu...

    return (
        <div ref={refs.menuRef} className={styles.user_menu_wrapepr}>
            <h1>menu</h1>
        </div>
    );
};

export default Menu;