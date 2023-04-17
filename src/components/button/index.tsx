import React, { CSSProperties, FC } from "react"
import "./index.scss"
import classNames from "classnames"

export type ButtonProps = {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  type?: "default" | "primary" | "success" | "warning" | "error" | "info" | "link" | "text"
  size?: "large" | "medium" | "small"
  round?: boolean
  icon?: string
  loading?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: FC<ButtonProps> = (props) => {
  const { style, className, children, type = "default", size = "medium", round, icon, loading, disabled, onClick } = props

  const btnClass = classNames({
    mzl_btn: true,
    [`mzl_btn_${type}`]: true,
    [`mzl_btn_${size}`]: true,
    mzl_btn_round: round,
    mzl_btn_loading: loading,
    [`mzl_btn_disabled mzl_btn_disabled_${type}`]: disabled,
    [className || ""]: !!className,
  })

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (onClick && !loading) {
      onClick(e)
    }
  }

  return (
    <button className={btnClass} style={style || undefined} disabled={disabled} onClick={handleBtnClick}>
      {loading ? <span className={["m-icon-loading1", "mzl_publicRotateEle"].join(" ")} /> : null}
      {icon && !loading ? <span className={icon} /> : null}
      {children}
    </button>
  )
}

export default Button
