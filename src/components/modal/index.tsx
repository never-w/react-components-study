import React, { FC, useEffect, useRef, useState } from "react"
import "./index.scss"
import Button from "../button"
import { createPortal } from "react-dom"

interface IProps {
  /** Modal 关闭后的回调 */
  afterClose?: () => void
  /** Modal body的样式 */
  bodyStyle?: React.CSSProperties
  /** 取消按钮文字 */
  cancelText?: string | React.ReactNode
  /** 是否展示右上角的关闭按钮 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode
  /** 底部内容，当不需要底部默认按钮时，可以设置为footer={null} */
  footer?: React.ReactNode
  /** 是否支持键盘的esc键退出 */
  keyboard?: boolean
  /** 是否展示遮罩 */
  mask?: boolean
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties
  /** 确认按钮的文本 */
  okText?: string | React.ReactNode
  /** 标题内容 */
  title?: string | React.ReactNode
  /**  Modal是否可见 */
  visible?: boolean
  /** Modal宽度 */
  width?: number
  /** 点击遮罩或者取消按钮，或者键盘esc按键时的回调 */
  onCancel?: () => void
  /** 点击确定的回调 */
  onOk?: () => void
  children?: React.ReactNode
}

const Modal: FC<IProps> = (props) => {
  const {
    afterClose,
    bodyStyle,
    cancelText = "取消",
    closable = true,
    closeIcon,
    footer,
    keyboard = true,
    mask = true,
    maskClosable = true,
    maskStyle,
    okText = "确认",
    title = "Modal Basic",
    visible = false,
    width = 520,
    onCancel,
    onOk,
    children,
  } = props

  const flagRef = useRef(false)
  const [hidden, setHidden] = useState(visible)

  useEffect(() => {
    document.onkeydown = function (event) {
      let e = event || window.event || arguments.callee.caller.arguments[0]
      if (keyboard && e?.key === "Escape") {
        onCancel?.()
      }
    }
  }, [])

  useEffect(() => {
    if (!visible && flagRef.current) afterClose?.()
    flagRef.current = true

    if (visible) {
      setHidden(visible)
    } else {
      setTimeout(() => {
        setHidden(visible)
      }, 200)
    }
  }, [visible])

  if (!hidden) return null

  return createPortal(
    <>
      <div className="modalWrap">
        <div
          className={["modalContent", visible ? undefined : "close"].filter(Boolean).join(" ")}
          style={{
            width,
          }}
        >
          <div className="modalHeader">
            <div className="modalTitle">{title}</div>
          </div>
          {closable && (
            <span className="modalCloseBtn" onClick={onCancel}>
              {closeIcon || <i className="icon-close-bold" />}
            </span>
          )}
          <div className="modalBody" style={bodyStyle}>
            {children}
          </div>
          {footer === null ? null : (
            <div className="modalFooter">
              {footer ? (
                footer
              ) : (
                <div className="modalFooterBtn">
                  <Button className="modalFooterBtnCancel" onClick={onCancel}>
                    {cancelText}
                  </Button>
                  <Button className="modalFooterBtnOk" type="primary" onClick={onOk}>
                    {okText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {mask && (
        <div
          className="modalMask"
          style={maskStyle}
          onClick={() => {
            if (maskClosable) onCancel?.()
          }}
        ></div>
      )}
    </>,
    document.body
  )
}

export default Modal
