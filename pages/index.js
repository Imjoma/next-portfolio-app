import Head from "next/head";
import Header from "../components/Header";
import Design from "../components/DesignSection/Design";
import Project from "../components/ProjectSection/Project";
import About from "../components/AboutSection/About";
import Contact from "../components/ContactSection/Contact";

import { motion } from "framer-motion";
import { routeAnimation } from "../config/animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jose Maria Ipio | Front End Developer</title>
        <meta
          name="description"
          content="Modern Web Developer Portolio made with nextjs, tailwind and framer motion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <header
          className="flex items-center justify-center max-w-screen-lg mx-auto md:justify-start"
          // minus navbar size: h-24 || 96px
          style={{ height: "100vh" }}
        >
          <Header />
        </header>
        <main className="max-w-screen-lg mx-auto ">
          <Design />
          <Project />
          <About />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
