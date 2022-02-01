import styles from '../styles/Footer.module.css'

function Footer() {

  const footer_text = [{ text: "Condition of use" }, { text: "Privacy Notice" }, { text: "Intreset-Based Ads" }, { text: "© 1996-2022, Home-cart.com, Inc. or its affiliates" }]

  return (
    <div className={styles.footer}>
      {
        footer_text.map((data) => (
          <div className={styles.footer_text}> 
              {data.text}
          </div>
        ))
      }
    </div>
  );
}

export default Footer;
