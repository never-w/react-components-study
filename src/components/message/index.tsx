import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import classNames from "classnames"
import { CSSTransition } from "react-transition-group"
import ReactDOM from "react-dom/client"

type Type = "success" | "error" | "warning" | "info" | "loading"
export type MessageProps = {
  open: boolean
  content?: string
  duration?: number
  type?: Type
}

const MessageEle: FC<MessageProps> = (props) => {
  const { open, content, duration = 3, type = "info" } = props
  const [showMessage, setShowMessage] = useState(false)

  const spaceClass = classNames("mzl_message_item", {
    [`mzl_message_item_${type}`]: type,
  })

  const defaultIcon = classNames({
    "m-icon-prompt-filling": type === "info",
    "m-icon-success-filling": type === "success",
    "m-icon-delete-filling": type === "error",
    "m-icon-warning-filling": type === "warning",
  })

  useEffect(() => {
    setShowMessage(open)
    const timer = setTimeout(
      () => {
        setShowMessage(false)
        setTimeout(() => {
          const container = document.querySelector(".mzl_message-container")
          container?.removeChild(document.querySelector(".mzl_message") as Node)
        }, 500)
      },
      duration ? duration * 1000 : 3000
    )

    return () => {
      clearTimeout(timer)
    }
  }, [open])

  return (
    <div>
      <CSSTransition in={showMessage} timeout={300} classNames="alert" unmountOnExit>
        <div className="mzl_message_position">
          <div className={spaceClass}>
            {type === "loading" ? <i className="m-icon-loading1 mzl_publicRotateEle" /> : <i className={defaultIcon} />}
            <span>{content}</span>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

const messageHandler = (content: string, type: Type, duration?: number) => {
  const container = document.querySelector(".mzl_message-container")

  if (!container) {
    const element = document.createElement("div")
    element.className = "mzl_message-container"
    document.body.appendChild(element)
  }

  const Ele = document.createElement("div")
  Ele.className = "mzl_message"
  // 渲染DOM
  ReactDOM.createRoot(Ele as HTMLElement).render(<MessageEle open content={content} duration={duration} type={type} />)

  // 置入到指定节点下
  if (container) {
    container.appendChild(Ele)
  }
}

const Message = {
  info: (content: string, duration?: number) => {
    messageHandler(content, "info", duration)
  },
  success: (content: string, duration?: number) => {
    messageHandler(content, "success", duration)
  },
  warning: (content: string, duration?: number) => {
    messageHandler(content, "warning", duration)
  },
  error: (content: string, duration?: number) => {
    messageHandler(content, "error", duration)
  },
  loading: (content: string, duration?: number) => {
    messageHandler(content, "loading", duration)
  },
}

export default Message
