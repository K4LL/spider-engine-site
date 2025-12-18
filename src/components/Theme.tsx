import '../Theme.css'

<<<<<<< HEAD
import { useAnimation } from "framer-motion"
import { useEffect } from "react"

import { usePageStateStore } from "../uiStore"

=======
import { animationControls, motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState, useLayoutEffect } from "react"

import { AnimatedSection } from "./AnimatedSection";
import { SectionFade } from "./SectionFade";
import { usePageStateStore } from "../uiStore"

interface ThemeSectionProps {
  panelRef: React.RefObject<HTMLDivElement | null>;
}
export const ThemeSection = () => {
  return (
    <>
      <h1>TEST PAGE</h1>
    </>
  )
}
>>>>>>> 34c91f86a8a854f6df2d021cc58ab13818ea4dad

export const ThemePageContainer = () => {
  const controls = useAnimation();

  const currentPageState = usePageStateStore((s) => s.inDevlogPage);
<<<<<<< HEAD
=======
  const setPageState = usePageStateStore((s) => s.setDevlogPage);
>>>>>>> 34c91f86a8a854f6df2d021cc58ab13818ea4dad

  useEffect(() => {
    if (currentPageState) {
          console.log("AAAAAAAAAAAAAAAA");
          controls.start({
        x: "50vw",
        transition: { duration: 1, ease: "easeInOut" }    
    });
    }
  })

  return (
    <>
<<<<<<< HEAD
      
=======
      <motion.div className="main-panel" animate={controls}>
        <ThemeSection></ThemeSection>
      </motion.div>
>>>>>>> 34c91f86a8a854f6df2d021cc58ab13818ea4dad
    </>
  )
}