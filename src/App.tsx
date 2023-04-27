import { FC } from "react"
import Button from "./components/button"

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10, paddingTop: 100 }}>
      <Button type="primary">按钮</Button>
      <Button type="error">按钮</Button>
      <Button type="link">按钮</Button>
      <Button type="success">按钮</Button>
      <Button type="text">按钮</Button>
      <Button type="warning">按钮</Button>
      <Button type="info">按钮</Button>
    </div>
  )
}

export default App
