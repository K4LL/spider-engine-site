import { AnimatedSection } from "./AnimatedSection"

export function FunFactsSection() {
  return (
    <>
      <section className="section fun-facts-content">
        <AnimatedSection sectionClassName="section fun-facts-content">
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
              <br/>👉 <a href="https://k4ll.github.io/spider-engine-docs/" target="_blank">Click me</a>
            </li>
            <li>
              Fun fact: This is the 10th (or 11th) time “Spider Engine” was mentioned on this page.
            </li>
          </ul>
        </AnimatedSection>
      </section>
    </>
  )
}