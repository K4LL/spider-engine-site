import { AnimatedSection } from "./AnimatedSection"

export function SupportUsSection() {
  return (
    <>
      <section className="section support-us-content">
        <AnimatedSection sectionClassName="section support-us-content">
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
      </section>
    </>
  )
}
