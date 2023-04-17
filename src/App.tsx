import React, { FC } from "react"
import Button from "./components/button"
import "./App.css"

interface IProps {}

const App: FC<IProps> = (props) => {
  return (
    <div className="main" style={{ display: "flex", gap: 10, flexWrap: "wrap", width: "35%", alignItems: "center" }}>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="text">文本按钮</Button>

      <Button round>圆角按钮</Button>
      <Button type="primary" round>
        圆角按钮
      </Button>

      <Button size="large">Large 按钮</Button>
      <Button type="primary" round>
        medium 按钮
      </Button>
      <Button type="primary" size="small">
        Small 按钮
      </Button>

      <Button disabled>默认按钮</Button>
    </div>
  )
}

export default App
