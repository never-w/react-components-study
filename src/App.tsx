import { FC } from "react"
import Button from "./components/button"

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10, paddingTop: 100 }}>
      <Button type="primary">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  )
}

export default App
