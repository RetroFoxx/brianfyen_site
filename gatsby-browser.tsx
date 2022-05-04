import * as React from "react"
import './src/styles/globals.css'
import type { GatsbyBrowser } from "gatsby"


export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <div style={{ height: '100%' }}>
      {element}
    </div>
  )
}