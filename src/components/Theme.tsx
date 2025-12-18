import '../Theme.css'

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

export const ThemePageContainer = () => {
  const controls = useAnimation();

  const currentPageState = usePageStateStore((s) => s.inDevlogPage);
  const setPageState = usePageStateStore((s) => s.setDevlogPage);

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
      <motion.div className="main-panel" animate={controls}>
        <ThemeSection></ThemeSection>
      </motion.div>
    </>
  )
}