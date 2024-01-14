import styles from "./page.module.css";
import Hero from "@/app/components/Hero/Hero";
import Projects from "@/app/components/Projects/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
    </main>
  );
}
