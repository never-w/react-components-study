import classNames from "classnames"
import React, { FC, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { CSSTransition } from "react-transition-group"
import "./index.scss"

type Type = "success" | "error" | "warning" | "info" | "loading"
interface MessageProps {
  type: Type
  content: string | React.ReactNode
  duration: number
  open: boolean
}

const MessageEle: FC<MessageProps> = (props) => {
  const { type, content, duration, open } = props

  const [showMessage, setShowMessage] = useState(false)

  const classes = classNames("message-item", {
    [`message-item-${type}`]: type,
  })

  const defaultIcon = classNames({
    "icon-prompt-filling": type === "info",
    "icon-success-filling": type === "success",
    "icon-delete-filling": type === "error",
    "icon-warning-filling": type === "warning",
  })

  useEffect(() => {
    setShowMessage(open)

    const timer = setTimeout(() => {
      setShowMessage(false)
      const container = document.querySelector(".message")
      container?.removeChild(document.querySelector(`.message-${type}`) as Node)
    }, duration * 1000)

    return () => clearTimeout(timer)
  }, [open])

  return (
    <div>
      <CSSTransition in={showMessage} timeout={300} classNames="alert" unmountOnExit>
        <div className="message-position">
          <div className={classes}>
            {type === "loading" ? <i className="icon-loading1 publicRotateEle" /> : <i className={defaultIcon} />}
            <span>{content}</span>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

const msgHandler = (content: string, type: Type, duration: number) => {
  if (!document.querySelector(".message")) {
    const eleRoot = document.createElement("div")
    eleRoot.className = "message"
    document.body.appendChild(eleRoot)
  }

  const ele = document.createElement("div")
  ele.className = `message-${type}`
  ReactDOM.createRoot(ele).render(<MessageEle content={content} type={type} duration={duration} open />)

  const container = document.querySelector(".message")
  if (container) {
    container.appendChild(ele)
  }
}

const Message = {
  info(content: string, duration: number = 3) {
    msgHandler(content, "info", duration)
  },
  success(content: string, duration: number = 3) {
    msgHandler(content, "success", duration)
  },
  error(content: string, duration: number = 3) {
    msgHandler(content, "error", duration)
  },
  loading(content: string, duration: number = 3) {
    msgHandler(content, "loading", duration)
  },
  warning(content: string, duration: number = 3) {
    msgHandler(content, "warning", duration)
  },
}

export default Message
