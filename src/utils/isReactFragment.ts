import React from "react"

const isReactFragment = (child: any) => {
  try {
    return child.type.toString() === React.Fragment.toString()
  } catch (e) {
    return false
  }
}

export default isReactFragment
