
import styles from './App.module.css'
import UserContext from "./Context/UserContext";
import {useState} from "react";
import {Route, Routes} from 'react-router-dom';
import Login from "./Components/Authorization/Login/Login";
import Registration from "./Components/Authorization/Registration/Registration";
import {HomePage} from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import StorePage from "./Components/StorePage/StorePage";
import AboutPage from "./Components/AboutPage/AboutPage";
// import

function App() {

    console.log(window.location.pathname)

    const [user,setUser]=useState(false)
    // const [registerIsOpen,setRegisterIsOpen] = useState(false)
    const successAuthorization = (user) =>{
        setUser(user)
        // setRegisterIsOpen(false)
    }


  return (
    <div className={styles.app}>
        <UserContext.Provider value={{user:user,successAuthorization}}>
            { window.location.pathname !== '/login' && window.location.pathname!=='/registration'? <Header/>:''}
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'/store'} element={<StorePage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/registration'} element={<Registration/>}/>

            </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
