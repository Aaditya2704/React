import React from 'react'
import MyParagraph from './MyParagraph'
function DemoOutput(props) {
    console.log("DemoOutput Running")
  return <MyParagraph>{props.show?"this is new!":" "}</MyParagraph>
}
export default React.memo(DemoOutput)
