import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/textId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/textId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/textId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/textId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/textId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
