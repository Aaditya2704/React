import React from 'react'
import classes from './Card.module.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className={`${classes.card} ${props.cssClass}`}>{props.children} </div>
  )
}
