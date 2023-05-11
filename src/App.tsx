import { FC, useState } from "react"
import Button from "./components/button"
import Space from "./components/space"
import Message from "./components/message"
import Spin from "./components/spin"
import Modal from "./components/modal"

interface IProps {}

const App: FC<IProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 100, position: "relative" }}>
      {/* <Space direction="vertical" size={100} align="center">
        <Space direction="horizontal" size={40}>
          <Button disabled>Default Button</Button>
          <Button type="primary" loading>
            Primary Button
          </Button>
          <Button type="danger" icon="icon-bianji">
            Danger Button
          </Button>
          <Button type="dashed" disabled>
            Dashed Button
          </Button>
          <Button type="text" disabled>
            Text Button
          </Button>
          <Button type="link" disabled>
            Link Button
          </Button>

          <Button
            size="sm"
            type="primary"
            onClick={() => {
              Message.info("这是一条成功的提示")
            }}
          >
            小按钮
          </Button>
          <Button size="lg" type="primary">
            大按钮
          </Button>

          <Button type="primary" round>
            Primary round Button
          </Button>
          <Button type="primary" round size="sm">
            Primary round sm Button
          </Button>
          <Button type="primary" round size="lg">
            Primary round lg Button
          </Button>
        </Space>
        <Spin />
      </Space> */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        afterClose={() => {
          console.log("sssssssssss")
        }}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default App
