import React, { CSSProperties, ReactNode } from "react"

interface SpaceProps {
  children: ReactNode
  align?: "start" | "end" | "center"
  direction?: "horizontal" | "vertical"
  size?: "small" | "medium" | "large" | number
}

// 定义辅助函数以获取尺寸
const getSizeValue = (size: "small" | "medium" | "large" | number): number => {
  switch (size) {
    case "small":
      return 8
    case "medium":
      return 16
    case "large":
      return 24
    default:
      return size
  }
}

const Space: React.FC<SpaceProps> = (props) => {
  const { children, direction = "horizontal", size = "small", align = "center" } = props

  const spaceSize = getSizeValue(size)

  const styles: CSSProperties = {
    display: "flex",
    flexDirection: direction === "horizontal" ? "row" : "column",
    alignItems: "start",
    gap: spaceSize,
  }

  return <div style={styles}>{children}</div>
}

export default Space
