import styles from "./page.module.css";
import Hero from "@/app/components/Hero/Hero";
import Projects from "@/app/components/Projects/Projects";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
