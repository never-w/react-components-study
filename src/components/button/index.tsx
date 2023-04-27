import React, { CSSProperties, FC } from "react"
import "./index.scss"
import classNames from "classnames"

interface IProps {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  type?: "default" | "primary" | "success" | "warning" | "error" | "info" | "link" | "text"
  size?: "large" | "middle" | "small"
  round?: boolean
  icon?: string
  loading?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: FC<IProps> = (props) => {
  const { style, className, children, type = "default", size = "middle", round = false, icon = false, loading = false, disabled = false, onClick } = props
  const classes = classNames(
    "button",
    `button--${type}`,
    `button--${size}`,
    {
      "button--round": round,
      "button--icon": icon,
      "button--loading": loading,
      "button--disabled": disabled,
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
