import React, { FC } from "react"
import Button from "./components/button"
import Space from "./components/space"
import Message from "./components/message"

interface IProps {}

const App: FC<IProps> = (props) => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", marginTop: 200 }}>
      {/* <Space direction="vertical"> */}
      <Space>
        <Button
          onClick={() => {
            Message.loading("最基本的提示，默认在3秒后消失。")
          }}
        >
          默认按钮
        </Button>
        <Button
          onClick={() => {
            Message.success("最基本的提示，默认在3秒后消失。")
          }}
          type="primary"
        >
          主要按钮
        </Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">失败按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="link">链接按钮</Button>
        <Button type="text">文本按钮</Button>
      </Space>

      {/* <Space>
          <Button round>圆角按钮</Button>
          <Button type="primary" round>
            圆角按钮
          </Button>
        </Space>

        <Space>
          <Button size="large">Large 按钮</Button>
          <Button type="primary" round>
            medium 按钮
          </Button>
          <Button type="primary" size="small">
            Small 按钮
          </Button>
          <Button disabled>默认按钮</Button>
        </Space>

        <Space>
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
        </Space>

        <Space>
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
        </Space>
      </Space> */}
    </div>
  )
}

export default App
