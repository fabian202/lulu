import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.main}>
      <Image src="/Lulu_400px.png" alt="Lulu!" width={400} height={200} />
      <h1 className={styles.title}>¡Muy Pronto!</h1>
    </div>
  );
}
