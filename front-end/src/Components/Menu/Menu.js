import React, {useContext, useEffect} from 'react';
import styles from './Menu.module.css'
import UserContext from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";


const Menu = ({refs, onHideMenu }) => {
    const context = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        const documentClickHandler = (e) => {
            if (refs.menuBtn.current !== e.target&& refs.menuRef.current && !refs.menuRef.current.contains(e.target)) {
                onHideMenu();
            }
        };

        document.addEventListener('click', documentClickHandler);

        return () => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, [onHideMenu]);


    return (
        <nav ref={refs.menuRef} className={styles.user_menu_wrapepr}>
            <ul>
                <li onClick={()=>navigate('/basket')}><a>Корзина</a></li>
                <li onClick={()=>navigate('/profile')}><a>Профіль</a></li>
                {context.user.role === 'admin'?<li onClick={()=>navigate('/admin_panel')}><a>Адмін панель</a></li>:''}
                <li onClick={()=>{context.logOut()}}>Вихід</li>
            </ul>
        </nav>
    );
};

export default Menu;