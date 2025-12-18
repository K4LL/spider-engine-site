import '../Theme.css'

import { useAnimation } from "framer-motion"
import { useEffect } from "react"

import { usePageStateStore } from "../uiStore"


export const ThemePageContainer = () => {
  const controls = useAnimation();

  const currentPageState = usePageStateStore((s) => s.inDevlogPage);

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
      
    </>
  )
}