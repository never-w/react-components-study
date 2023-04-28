import React, { CSSProperties, FC } from "react"
import "index.scss"
import classNames from "classnames"

interface IProps {
  gap?: number
  style?: CSSProperties
  className?: string
  direction?: "horizontal" | "vertical"
  align?: "start" | "end" | "center" | "baseline"
}

const Space: FC<IProps> = (props) => {
  return <div></div>
}

export default Space
