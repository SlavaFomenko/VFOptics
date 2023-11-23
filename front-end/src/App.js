
import styles from './App.module.css'
import UserContext from "./Context/UserContext";
import {Profiler, useState} from "react";
import {Route, Routes} from 'react-router-dom';
import Login from "./Components/Authorization/Login/Login";
import Registration from "./Components/Authorization/Registration/Registration";
import {HomePage} from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import StorePage from "./Components/StorePage/StorePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import BasketPage from "./Components/BasketPage/BasketPage";
import ProfilePage from "./Components/ProfilPage/ProfilePage";
import AdminPanelPage from "./Components/AdminPanelPage/AdminPanelPage";
// import

function App() {

    // console.log(window.location.pathname)

    const [user,setUser]=useState(
        {
            customer_id: "admin", first_name: "Viacheslav",
            last_name: "Fomenko",
            password: "909011", role: "admin",
            tel_number: "969073576"}
    )
    // const [registerIsOpen,setRegisterIsOpen] = useState(false)
    const successAuthorization = (user) =>{
        setUser(user)
    }
    const logOut = ()=>{
        console.log('log out')
        setUser(false)
            window.location.reload();
    }


  return (
    <div className={styles.app}>
        <UserContext.Provider value={{user:user,successAuthorization,logOut}}>
            { window.location.pathname !== '/login' && window.location.pathname!=='/registration'? <Header/>:''}
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'/store'} element={<StorePage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/basket'} element={<BasketPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/admin_panel'}  element={<AdminPanelPage/>}/>
            </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
