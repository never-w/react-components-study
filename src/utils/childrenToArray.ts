import React from "react"
import isReactFragment from "./isReactFragment"

export type Option = {
  keepEmpty?: boolean
}

export default function childrenToArray(children: React.ReactNode, option: Option = {}): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any | any[]) => {
    if (child == null && !option.keepEmpty) {
      return
    }

    if (Array.isArray(child)) {
      ret = ret.concat(childrenToArray(child))
    } else if (isReactFragment(child) && child.props) {
      ret = ret.concat(childrenToArray(child.props.children, option))
    } else {
      ret.push(child)
    }
  })

  return ret
}
