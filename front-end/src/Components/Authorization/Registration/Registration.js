import React, {useId, useState} from 'react';
import styles from './Registration.module.css';
import InputMask from 'react-input-mask';
import {useNavigate} from "react-router-dom";
const Registration = (props) => {
    const [registerData, setRegisterData] = useState({
        login: '',
        tel_number: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
    });
    const navigate = useNavigate()

    const msgId = useId()

        //

    console.log(registerData)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value.trim() });
    };

    const handleSubmit = () => {
        const msgSpan = document.getElementById(msgId)
        const {login,tel_number,first_name,last_name,password,confirm_password} = registerData

        console.log("Password Testing", registerData.password, password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password))

        if(login === '' && login.includes(' ')){
            msgSpan.innerText = 'Введіть корректний логін'
            msgSpan.style.display='block';
            setRegisterData({...registerData,login: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        } else if (!(/^[0-9a-zA-Z]+$/.test(login))){
            msgSpan.innerText = 'Логін може містити виключно цифри та латинські літери'
            msgSpan.style.display='block';
            setRegisterData({...registerData,login: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        }else if (tel_number.includes('_')){
            msgSpan.innerText = 'Введіть корректний номер телефону'
            msgSpan.style.display='block';
            setRegisterData({...registerData,tel_number: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        } else if (first_name ===''){
            msgSpan.innerText = 'Введіть корректне імʼя'
            msgSpan.style.display='block';
            setRegisterData({...registerData,first_name: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        } else if (last_name === ''){
            msgSpan.innerText = 'Введіть корректну фамілію'
            msgSpan.style.display='block';
            setRegisterData({...registerData,last_name: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        } else if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password))){

            msgSpan.innerText = 'Пароль має складатися з хоча б одної великої та маленької латинських літер, цифри і має бути не коротше 8 символів!'
            msgSpan.style.display='block';
            setRegisterData({...registerData,password: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },10000)
            return
        } else if(password !== confirm_password){
            msgSpan.innerText = 'Паролі не збігаються'
            msgSpan.style.display='block';
            setRegisterData({...registerData,confirm_password: ''})
            setRegisterData({...registerData,password: ''})
            setTimeout(()=>{
                msgSpan.style.display='none'
            },5000)
            return
        }
        const xhr = new XMLHttpRequest();

        const url = "registration";
        const jsonData = {
            login: login,
            first_name: first_name,
            last_name: last_name,
            password: password,
            tel_number: tel_number,
            role:'user'
        }
        const jsonString = JSON.stringify(jsonData);
        xhr.open("POST", url, true);

        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = function () {
            // console.log(xhr)
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                console.log(response)
                if(response.status === 'err'){
                    msgSpan.innerText = response.message
                    msgSpan.style.display='block';
                    setTimeout(()=>{
                        msgSpan.style.display='none'
                    },5000)
                    return
                }
                if(response.status === 'success'){
                    navigate('/login')
                }
            }
        };

        xhr.send(jsonString);
    };

    return (
        <section className={styles.section}>
            <span id={msgId} className={styles.msgFailed}></span>
            <main className={styles.login_form_wrapper}>
                <h1>Реєстрація</h1>
                <form className={styles.login_form}>
                    <div className={styles.input_wrapper}>
                        <input
                            type="text"
                            name="login"
                            value={registerData.login}
                            onChange={handleInputChange}
                            placeholder="Логін"
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <InputMask
                            mask="+38(099)999-99-99"
                            type="tel"
                            name="tel_number"
                            value={registerData.tel_number}
                            onChange={handleInputChange}
                            placeholder="Номер телефону"
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <input
                            type="text"
                            name="first_name"
                            value={registerData.first_name}
                            onChange={handleInputChange}
                            placeholder="Імʼя"
                        />
                    </div>

                    <div className={styles.input_wrapper}>
                        <input
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleInputChange}
                            placeholder="Пароль"
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <input
                            type="text"
                            name="last_name"
                            value={registerData.last_name}
                            onChange={handleInputChange}
                            placeholder="Фамілія"
                        />
                    </div>

                    <div className={styles.input_wrapper}>
                        <input
                            type="password"
                            name="confirm_password"
                            value={registerData.confirm_password}
                            onChange={handleInputChange}
                            placeholder="Повторіть пароль"
                        />
                    </div>

                    <button type="button" onClick={handleSubmit}>
                        Зареєструватися
                    </button>
                </form>
            </main>
        </section>
    );
};

export default Registration;
