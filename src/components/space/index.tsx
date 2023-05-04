import React, { FC } from "react"
import childrenToArray from "../../utils/childrenToArray"
import Item from "./item"
import classNames from "classnames"
import "./index.scss"

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  align?: "start" | "end" | "center" | "baseline"
  direction?: "horizontal" | "vertical"
  size?: SpaceSize
  split?: React.ReactNode
}
type SpaceSize = "small" | "middle" | "large" | number

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

function getNumberSize(size: SpaceSize) {
  return typeof size === "string" ? spaceSize[size] : size || 0
}

export const SpaceContext = React.createContext({
  latestIndex: 0,
  spaceSizeNum: 0,
})

const Space: FC<SpaceProps> = (props) => {
  const { className, style, align, direction = "horizontal", size = "small", split, children } = props

  const classes = classNames(
    "space",
    `space-${direction}`,
    {
      [`space-align-${align}`]: align,
    },
    className
  )

  const childNodes = childrenToArray(children, { keepEmpty: true })

  // Calculate latest one
  let latestIndex = 0
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i
    }

    const key = (child && child.key) || `space-item-${i}`

    return (
      <Item key={key} direction={direction} index={i} split={split}>
        {child}
      </Item>
    )
  })

  return (
    <div className={classes} style={style}>
      <SpaceContext.Provider value={{ spaceSizeNum: getNumberSize(size), latestIndex }}>{nodes}</SpaceContext.Provider>
    </div>
  )
}

export default Space
