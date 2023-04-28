import React, { CSSProperties, FC, forwardRef } from "react"
import "./index.scss"
import classNames from "classnames"

interface IProps {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  type?: "primary" | "dashed" | "link" | "text" | "default" | "danger"
  size?: "lg" | "md" | "sm"
  round?: boolean
  icon?: string
  loading?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: FC<IProps> = (props) => {
  const { style, className, children, type = "default", size = "md", round = false, icon = false, loading = false, disabled = false, onClick } = props
  const classes = classNames(
    "btn",
    `btn-${type}`,
    `btn-${size}`,
    {
      "btn-round": round,
      "btn-icon": icon,
      "btn-loading": loading,
      "btn-disabled": disabled,
    },
    className
  )

  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    if (!disabled && !loading && onClick) {
      onClick(event)
    }
  }

  return (
    <button className={classes} style={style} onClick={handleClick} disabled={disabled}>
      {icon && <i className={`icon-${icon}`} />}
      {loading && <i className="icon-loading" />}
      {children}
    </button>
  )
}

export default Button
