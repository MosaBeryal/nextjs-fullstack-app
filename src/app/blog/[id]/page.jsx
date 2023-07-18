import styles from "./page.module.css";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className={styles.author}>
            <Image
              src="/profile.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avator}
            />
            <span className={styles.username}>Johan Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            alt=""
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged,Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
