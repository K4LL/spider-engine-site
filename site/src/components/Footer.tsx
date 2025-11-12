import { AnimatedSection } from "./AnimatedSection"

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
              <a href="https://k4ll.github.io/spider-engine/devlog">Devlog Here 📝</a>
            </li>
          </ul>
        </AnimatedSection>
      </section>
    </>
  )
}