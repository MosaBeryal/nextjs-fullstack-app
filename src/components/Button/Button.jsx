import Link from "next/link";
import styles from "./page.module.css";
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>
        {text}
      </button>
  
    </Link>
  );
};

export default Button;
