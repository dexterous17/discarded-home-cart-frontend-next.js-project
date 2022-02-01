import styles from '../styles/Header.module.css'

function Header(props) {
  const { text1, text2, text3, text4, text5 } = props;

  return (
    <div className={styles.navbar}>

      <div className={styles.home_cart}>
        {text1}
      </div>

      <div className={styles.middle}>
        <div className={styles.searchbar}>
          <input className={styles.searchbarinput} placeholder='Search here'></input>
          <svg className={styles.searchbarbutton} viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill='white'/>
          </svg>
        </div>
        <div className={styles.login}>
          <div className={styles.loginupper}>
            Hello, Sign in
          </div>
          <div className={styles.loginbottom}>
            Account & List
          </div>
        </div>
        <div className={styles.orders}>
          <div className={styles.ordersupper}>
            Returns
          </div>
          <div className={styles.ordersbottom}>
            & Orders
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.cart} viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>

    </div>
  );
}

export default Header;