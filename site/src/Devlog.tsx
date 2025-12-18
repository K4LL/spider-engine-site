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
              <h2>11/12/2025</h2>
              <p>
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