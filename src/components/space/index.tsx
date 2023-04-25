import React, { FC, CSSProperties } from "react"
import "./index.scss"
import classNames from "classnames"

export type SpaceProps = {
  style?: CSSProperties
  className?: string
  children: React.ReactNode
  direction?: "horizontal" | "vertical"
  gap?: number
  align?: "start" | "end" | "center" | "baseline"
}

const Space: FC<SpaceProps> = (props) => {
  const { style, className, children, direction = "horizontal", gap = 10, align = "baseline" } = props

  const spaceClass = classNames("mzl_space", className)

  const spaceStyle = {
    ...style,
    flexFlow: direction === "vertical" ? "column wrap" : "wrap",
    gap,
    alignItems: direction === "vertical" ? align : "baseline",
    justifyContent: direction === "horizontal" ? align : "baseline",
  }

  return (
    <div className={spaceClass} style={style || spaceStyle}>
      {children}
    </div>
  )
}

export default Space
