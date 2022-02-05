import styles from '../styles/login.module.css'

function login() {
    return (
        <div className={styles.login}>
            <div className={styles.login_box}>
                <div className={styles.login_text}>
                    Hello Cart
                </div>
                <div className={styles.login_main_box}>
                    <div className={styles.login_input_box}>
                        <div>
                            <div>
                                Email
                            </div>
                            <input />
                        </div>
                        <div>
                            <div>
                                Password
                            </div>
                            <input />
                        </div>
                    </div>
                    <div>Forgot your password ?</div>
                </div>
                <div className={styles.login_button}>
                        <div>Sign In</div>
                        <div>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default login;