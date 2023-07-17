import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>MosaBeryal. All rights reserved</div>
      <div className="social">
        <Image
          src="/facebook.png"
          alt="footerimage"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/instagram.png"
          alt="footerimage"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/twitter.png"
          alt="footerimage"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/linkedin.png"
          alt="footerimage"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
