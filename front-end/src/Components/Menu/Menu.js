import React, {useContext, useEffect} from 'react';
import styles from './Menu.module.css'
import UserContext from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";


const Menu = ({refs, onHideMenu }) => {
    const context = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        const documentClickHandler = (e) => {
            // console.log(e.target )
            // console.log(refs.menuBtn)
            // console.log('info = ' + refs.menuBtn !== e.target)
            if (refs.menuBtn.current !== e.target&& refs.menuRef.current && !refs.menuRef.current.contains(e.target)) {
                // console.log('hello me')
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
                <li onClick={()=>{context.logOut()}}>Вихід</li>
            </ul>
        </nav>
    );
};

export default Menu;