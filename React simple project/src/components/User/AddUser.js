/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';

export default function (props) {
  const addSubmitHandler=(event)=>{
    event.prevntDefault();
  }

  return (
    <Card cssClass={classes.input} >
      <form onSubmit={addSubmitHandler}>
          <label htmlFor='username'>UserName</label>
          <input id="username" type="text" />
          <label htmlFor='age'>Age(Years)</label>
          <input id="age" type="number" />
          <button type='submit'>Add User</button>
      </form>
    </Card>

  )
}
