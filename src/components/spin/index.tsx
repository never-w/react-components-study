import React, { FC } from "react"

interface IProps {}

const Spin: FC<IProps> = (props) => {
  return <div className="icon-loading1 publicRotateEle" style={{ fontSize: 50 }}></div>
}

export default Spin
