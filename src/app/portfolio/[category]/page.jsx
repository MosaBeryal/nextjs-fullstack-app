import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h2 className={styles.caTitle}>{params.category}</h2>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Tests</h1>
          <p className={styles.desc}>Description</p>
          <Button text="see more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/illustration.jpg" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Tests</h1>
          <p className={styles.desc}>Description</p>
          <Button text="see more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/illustration.jpg" fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Category;
