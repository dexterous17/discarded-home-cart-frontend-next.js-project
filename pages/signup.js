import styles from '../styles/signup.module.css'
import Signup from '../components/Signup'

function signup() {
    return (
        <div className={styles.signup}>
                <div className={styles.signup_box}>
                    <div className={styles.signup_text}>
                        Sign up
                    </div>
                   <Signup/>
                    
                </div>
        </div>
    )
}

export default signup;