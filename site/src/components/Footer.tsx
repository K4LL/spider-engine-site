import { AnimatedSection } from "./AnimatedSection"
import { Link } from "react-router-dom";

export function FooterSection() {
  return (
    <>
      <section className="section footer-content">
        <AnimatedSection sectionClassName="section footer-content">
          <ul className="section footer-content">
            <li>
              <a href="https://github.com/K4LL/spider-engine/">Project Repo 🗂️</a>
            </li>
            <li>
              <Link to="/devlog">Devlog Here 📝</Link>
            </li>
          </ul>
        </AnimatedSection>
      </section>
    </>
  )
}