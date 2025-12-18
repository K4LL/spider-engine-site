import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import Logo from "../assets/logo.svg?react";

function AnimatedTitleAndLogo() {
  return (
    <>
      <motion.div
        className={"title"}>
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
        <Logo className="logo"/>
      </motion.div>
    </>
  );
}

export function MainSection() {
  return (
    <>
      <div className="permanent-header">
      </div>

      <div className="hero">
        <div className="main-panel">
          <AnimatedTitleAndLogo />
        </div>
      </div>

      <section className="section main-content">
        <AnimatedSection sectionClassName="section main-content">
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
          <p>
            But... There is a trade-off: Spider Engine is Windows-only.
          </p>
        </AnimatedSection>
      </section>
    </>
  )
}