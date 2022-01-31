import styles from '../../styles/Header.module.css'

function Header(props) {
  const { text1, text2, text3, text4, text5 } = props;

  return (
    <div className={styles.navbar}>
      <div className={styles.home_cart}>
        <div className={`${styles.text_1} ${styles.roboto_light_white_20px}`}>
          {text1}
        </div>
      </div>
      <img
        className="search-bar"
        src="search-bar.svg"
      />
      <div className={styles.text}>
        <div className={`${styles.text_1} ${styles.roboto_light_white_20px}`}>
          {text2}
        </div>
        <div className={`${styles.text_2} ${styles.roboto_normal_white_20px}`}>
          {text3}
        </div>
      </div>
      <div className="return-orders">
        <div className={`${styles.text_3} ${styles.roboto_light_white_20px}`}>
          {text4}
        </div>
        <div className={`${styles.text_4} ${styles.roboto_normal_white_20px}`}>
          {text5}
        </div>
      </div>
      <img
        className="cart"
        src="layer-3.svg"
      />
    </div>
  );
}

export default Header;