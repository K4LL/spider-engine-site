import './App.css';

import { AnimatedSection } from './components/AnimatedSection';

import { Link } from "react-router-dom"

export function Devlog() {
  return (
    <>
      <section className="section devlog-content">
        <AnimatedSection sectionClassName="section devlog-content">
          <h2>Devlog Here 😀</h2>

          <ul className="section devlog-content">
            <li>
              <h2>2025-12-18</h2>
              <h4>09:17 -</h4>
              <p>
                Now I finally finished the site. It should be funny, but I'm too lazy and need to fix the engine itself. So, no time
                for the site.
              </p>
              <h4>16:31 -</h4>
              <p>
                So, now I will get back to work on the engine. Basically, everything is broken. The renderer in the newer branches
                doesn't render anything, the old one is not broken, but has some "specifications" that I really need to change.
                Also, I think there are lots of bugs and memory leaks that I fixed in the newer versions.
                I'm thinking about getting the newer branches and just throw the new renderer on the old renderer, but it may not work, so
                probably I will need to fix everything by hand.
                Also, I will try to port a part of the engine to Rust, but I don't really know if it will be a good idea. It could maybe
                help with safety, debugging, and if i try to make multithreading, it would also help with performance, even tho it is not
                the main goal right now.
              </p>
            </li>
            <li>
              <h2>2025-11-12</h2>
              <p>
                <h4>??:?? -</h4>
                I just finished the landing page and created the devlog. I need to get back to work on the engine itself.
              </p>
            </li>
          </ul>
        </AnimatedSection>

        <Link to="/">Return to Landing Page</Link>
      </section>
    </>
  )
}

export default Devlog;