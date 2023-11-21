import styles from './Header.module.css'
import eye_logo from '../../images/header/eye_logo.png'
import {useContext, useEffect, useRef, useState} from "react";
import UserContext from '../../Context/UserContext';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu/Menu";
// import

function Header({setRegisterIsOpen}) {
    const [menuVisible,setMenuVIsible] = useState(false)
    const menuRef = useRef()
    const menuBtn = useRef()

    const documentClickHandler = (e) =>{
        console.log(e.target)
        console.log((menuBtn.current !== e.target))
        console.log(menuRef.current && !menuRef.current.contains(e.target))
        if (e.target !== menuBtn.current && menuRef.current && !menuRef.current.contains(e.target)) {
            console.log('hello')
            setMenuVIsible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click',documentClickHandler)
        return(()=>document.removeEventListener('click',documentClickHandler))
    }, []);

    console.log( 'state = ' +menuVisible)
    const context = useContext(UserContext)
    const navigate = useNavigate()
    return (
                <header className={styles.header_wrapper}>
                    <div className={styles.logo_wrapper}>
                        <div className={styles.logo_image}>
                            <img alt={'logo'} src={eye_logo} />
                        </div>
                        <div className={styles.logo_name}>
                            <span>VF Optics</span>
                        </div>
                    </div>
                    <nav className={styles.nav_wrapper}>
                        <ul className={styles.ul_list}>
                            <li onClick={()=>navigate('/')}>Головна</li>
                            <li onClick={()=>navigate('/store')}>Товари</li>
                            <li onClick={()=>navigate('/about')}>Про нас</li>
                        </ul>
                    </nav>
                    <div className={styles.user}>
                        {context.user?
                            <div className={styles.user_info_wrapper}>
                                <span>{context.user.first_name} {context.user.last_name}</span>
                                <div ref={menuBtn} onClick={()=> menuVisible?setMenuVIsible(false):setMenuVIsible(true)} className={styles.menu_btn_icon_wrapper}></div>
                            </div>
                            :
                            <a href={'/login'}>Login</a>}
                    </div>
                    {menuVisible && <Menu refs={{menuRef:menuRef,menuBtn:menuBtn}} onHideMenu={() => setMenuVIsible(false)} />}
                </header>
    );
}

export default Header;
