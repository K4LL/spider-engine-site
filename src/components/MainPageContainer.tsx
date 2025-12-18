import { motion, useAnimation } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import { AnimatedSection } from "./AnimatedSection";
import { SectionFade } from "./SectionFade";
import { usePageStateStore } from "../uiStore"

import Logo from "../assets/logo.svg?react";

interface MainPageContainerProps {
  refObject: React.RefObject<HTMLDivElement | null>;
}

// ====== MAIN SECTION ======
const AnimatedTitleAndLogo = () => {
  return (
    <>
      <motion.div className={"title"}>
        <h1 className="title">
          <a style={{ textDecoration: "none", color: "inherit" }}
            href="https://github.com/K4LL/spider-engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spider Engine:<br /> Modern, Simple, Explicit.
          </a>
        </h1>
      </motion.div>
      <motion.div className="logo">
        <Logo className="logo" />
      </motion.div>
    </>
  );
}

const MainSection = ({ refObject }: MainPageContainerProps) => {
  return (
    <>
      <div className="wrapper">
        <header className="hero">
          <div className="main-panel">
            <AnimatedTitleAndLogo />
          </div>
        </header>
        <div className="main-background" ref={refObject}>
          <AnimatedSection sectionClassName="section content">
            <h2>Our Goals</h2>
            <p>
              Our goal is to deliver a modern and explicit way to build games, focusing on performance and clarity.
            </p>

            <h2>What is on Course?</h2>
            <p>
              An Editor is currently in development to provide a smoother project experience.
              It will significantly improve the usability of Spider Engine, enabling:
            </p>
            <ul>
              <li>Support for more complex and scalable projects</li>
              <li>Faster debugging and testing</li>
              <li>Improved engine performance</li>
              <li>Simplified distribution and project management</li>
            </ul>
            <p>
              Meanwhile, we’re making major improvements to the core engine: refining interfaces, expanding features, and enhancing usability and performance.
            </p>

            <h2>Why Use Spider Engine?</h2>
            <p>
              Spider Engine is tightly integrated with DirectX 12 and Windows, allowing for extremely efficient performance and fast iteration.
              This approach enables clearer APIs, more direct control, and a smoother update process, resulting in a fast and flexible development experience.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}
// ====== END OF MAIN SECTION ======

// ====== SUPPORT US SECTION ======
const SupportUsSection = ({ refObject }: MainPageContainerProps) => {
  return (
    <>
      <div className="wrapper" ref={refObject}>
        <div className="support-us-background">
          <AnimatedSection sectionClassName="section support-us content">
            <h2>Support Spider Engine</h2>
            <p>
              Spider Engine is currently a one-dev project (yes, just one human, one AI and one computer).
              If the project looks interesting or useful, you can support it by starring the GitHub repo:
            </p>

            <a className="cta"
              href="https://github.com/K4LL/spider-engine"
              target="_blank">
              ⭐ Give it a Star
            </a>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}
// ====== END OF SUPPORT US SECTION ======

// ====== FUN FACTS SECTION ======
const FunFactsSection = ({ refObject }: MainPageContainerProps) => {
  return (
    <>
      <div className="wrapper" ref={refObject}>
        <div className="fun-facts-background">
          <AnimatedSection sectionClassName="section fun-facts content">
            <h2>🎉 Fun Facts 🎉</h2>
            <ul>
              <li>
                Despite the “we” on the homepage, Spider Engine is still a solo project.
                The “we” just sounds better, and I needed you to read it.
              </li>
              <li>
                This is actually my 3rd (or 4th?) attempt at writing a game engine.
              </li>
              <li>
                I'm currently creating a devlog. It's a great way to track progress and talk about the engine without annoying friends.
              </li>
              <li>
                Spider Engine got its name from my previous engine where the object/entity architecture
                resembled a... tree?
              </li>
              <li>
                Yes, I use ChatGPT. No, it doesn’t write the engine for me.
              </li>
              <li>
                Spider Engine's logo is actually messed up. It has literally half pixels and is not aligned for some reason. This will probabilly be in the editor, as it's not visible without an editor.
              </li>
              <li>
                Currently, there isn't a release version, but if you want to test it, you can read the README and check the (possibly outdated) documentation here:
                <br />👉 <a href="https://k4ll.github.io/spider-engine-docs/" target="_blank">Click me</a>
              </li>
              <li>
                Fun fact: This is the 10th (or 11th) time “Spider Engine” was mentioned on this page.
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}
// ====== END OF FUN FACTS SECTION ======

// ====== FOOTER SECTION ======
const FooterSection = ({ refObject }: MainPageContainerProps) => {
  const controls = useAnimation();

  const currentPageState = usePageStateStore((s) => s.inDevlogPage);
  const setPageState = usePageStateStore((s) => s.setDevlogPage);

  useEffect(() => {
    if (currentPageState) {
          controls.start({
      x: "-100vw",
      transition: { duration: 1, ease: "easeInOut" }
    });
    }
  }, [currentPageState]);

  return (
    <>
      <motion.div className="wrapper" ref={refObject} animate={controls}>
        <div className="footer-background">
          <AnimatedSection sectionClassName="section footer content">
            <ul className="section footer content">
              <li>
                <a href="https://github.com/K4LL/spider-engine/">Project Repo 🗂️</a>
              </li>
              <li>
                <button onClick={() => { setPageState(true) }}>Devlog Here 📝</button>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </motion.div>
    </>
  )
}
// ====== END OF FOOTER SECTION ======

export const MainPageContainer = () => {
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const supportUsSectionRef = useRef<HTMLDivElement | null>(null);
  const funFactsSectionRef = useRef<HTMLDivElement | null>(null);
  const footerSectionRef = useRef<HTMLDivElement | null>(null);

  const [mainSectionStart, setMainSectionStart] = useState<number>(0);
  const [supportUsSectionStart, setSupportUsSectionStart] = useState<number>(0);
  const [funFactsSectionStart, setFunFactsSectionStart] = useState<number>(0);
  const [footerSectionStart, setFooterSectionStart] = useState<number>(0);

  useEffect(() => {
    if (mainSectionRef.current && supportUsSectionRef.current && funFactsSectionRef.current && footerSectionRef.current) {
      setMainSectionStart(mainSectionRef.current.offsetTop);
      setSupportUsSectionStart(supportUsSectionRef.current.offsetTop);
      setFunFactsSectionStart(funFactsSectionRef.current.offsetTop);
      setFooterSectionStart(footerSectionRef.current.offsetTop);
      return;
    }
    console.log("One or more section refs are null.");
  }, []);

  return (
    <>
      <motion.div className="page">
        <MainSection refObject={mainSectionRef} />
        <SupportUsSection refObject={supportUsSectionRef} />
        <FunFactsSection refObject={funFactsSectionRef} />
        <FooterSection refObject={footerSectionRef} />
      </motion.div>

      <SectionFade color="#05000A" offset={mainSectionStart} />
      <SectionFade color="#07000C" offset={supportUsSectionStart} />
      <SectionFade color="#08000E" offset={funFactsSectionStart} />
      <SectionFade color="#05000B" offset={footerSectionStart} />
    </>
  );
};