import { FC } from "react"
import Button from "./components/button"

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10, paddingTop: 100 }}>
      <Button disabled>Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
      <Button type="text" disabled>
        Text Button
      </Button>
      <Button type="link" disabled>
        Link Button
      </Button>

      <Button size="sm" type="primary">
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
    </div>
  )
}

export default App
