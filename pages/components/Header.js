import styles from '../../styles/Header.module.css'

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
          <button className={styles.searchbarbutton}/>
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
      <div className={styles.cart}>

      </div>
    </div>
  );
}

export default Header;