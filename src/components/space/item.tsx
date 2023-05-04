import * as React from "react"
import { SpaceContext } from "."

export interface ItemProps {
  children: React.ReactNode
  index: number
  direction?: "horizontal" | "vertical"
  split?: string | React.ReactNode
}

export default function Item({ direction, index, children, split }: ItemProps) {
  const { spaceSizeNum, latestIndex } = React.useContext(SpaceContext)

  let style: React.CSSProperties = {}

  if (direction === "vertical") {
    style = { ...(index < latestIndex && { marginBottom: spaceSizeNum / (split ? 2 : 1) }) }
  } else {
    style = { ...(index < latestIndex && { marginRight: spaceSizeNum / (split ? 2 : 1) }) }
  }

  if (children === null || children === undefined) return null

  return (
    <>
      <div style={style}>{children}</div>
      {index < latestIndex && split && <span style={style}>{split}</span>}
    </>
  )
}
