import React from 'react'

export default function MyParagraph(props) {
    console.log('MyParagraph RUNNING')
  return (

    <div>{props.children}</div>
  )
}
