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

      <Button icon="m-icon-edit">编辑</Button>
      <Button type="primary" icon="m-icon-copy">
        复制
      </Button>
      <Button icon="m-icon-search" round>
        搜索
      </Button>
      <Button type="primary" icon="m-icon-scanning" round>
        扫描
      </Button>
      <Button>
        设置
        <i className="m-icon-setting" />
      </Button>
      <Button type="primary">
        添加
        <span className="m-icon-add" />
      </Button>
      <Button icon="m-icon-edit" />
      <Button type="primary" icon="m-icon-copy" />
      <Button icon="m-icon-search" round />
      <Button type="primary" icon="m-icon-scanning" round />

      <Button loading>加载中</Button>
      <Button type="primary" loading>
        加载中
      </Button>
      <Button icon="m-icon-search" round loading>
        点击我
      </Button>
      <Button type="primary" round icon="m-icon-setting" loading>
        点击
      </Button>
    </div>
  )
}

export default App
