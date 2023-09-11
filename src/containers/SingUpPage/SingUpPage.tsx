import { useDispatch } from 'react-redux';
import IUserDto from '../../interfaces/IUserDto';
import { AppDispatch, AppState } from '../../store/store';
import styles from './SingUpPage.module.css';
import {useState} from 'react'
import { login, register } from '../../store/users/users.slice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
export const SingUpPage = () => {
    const [userData, setUserData] = useState<IUserDto>({username: '', password: '', contacts: ''})
    const {user} = useSelector((state: AppState) => {return state.users})
    const [isLogIn, setIsLogin] = useState<boolean>(false)
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmitReg = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(register(userData))
        console.log(user)
        navigate('/')
      };
      const handleSubmitLog = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(login(userData))
        console.log(user)
        navigate('/')
      };

  return (
    <div className={styles.sing_up_con}>
        <div className={styles.sing_up_img}></div>
        <div className={styles.sing_up_form}>
            <h2 className={styles.reg_form_title}>Create an account</h2>
            <p className={styles.reg_form_sub}>Enter your details below</p>
            <form className={styles.reg_form_form} onSubmit={isLogIn? handleSubmitLog: handleSubmitReg}>
                <input onChange={handleInputChange} className={styles.singUp_inputs}placeholder='Name' name='username' type="text" />
                {isLogIn? null : <input onChange={handleInputChange} className={styles.singUp_inputs} placeholder='Email or Phone Number' name='contacts' type="text" />}
                <input onChange={handleInputChange} className={styles.singUp_inputs} placeholder='Password' name='password' type="password" />
                <button className={styles.register_btn} type='submit'>{isLogIn? "Login" : "Create Account"}</button> 
            </form>
            {isLogIn?
                <div className={styles.logIn_switch_block}>
                    <p>Create account ? </p>
                    <p style={{cursor: "pointer"}} onClick={() => (setIsLogin(false))}>Register</p>
                </div>
                :
                <div className={styles.logIn_switch_block}>
                    <p>Already have account ? </p>
                    <p style={{cursor: "pointer"}} onClick={() => (setIsLogin(true))}>Log in</p>
                </div>
            
            }
            <button onClick={() => {console.log(user)}}>Show</button>
        </div>
    </div>
  )
}
