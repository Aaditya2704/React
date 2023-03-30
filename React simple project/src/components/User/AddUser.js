/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

export default function (props) {

  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addSubmitHandler=(event)=>{
    event.preventDefault();
    if(enteredUserName.trim().length===0||enteredAge.trim().length===0)return;
    if(+enteredAge<1)return;
    props.onAddUser(enteredUserName,enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  }
  const userNameChangeHandler=(event)=>{
    setEnteredUserName(event.target.value)
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
  }

  return (
    <div>
    <ErrorModal title="An error occured!" message="Something went wrong"/>
    <Card cssClass={classes.input} >
      <form onSubmit={addSubmitHandler}>
          <label htmlFor='username'>UserName</label>
          <input id="username" type="text" value={enteredUserName}onChange={userNameChangeHandler} />
          <label htmlFor='age'>Age(Years)</label>
          <input id="age" type="number"  value={enteredAge} onChange={ageChangeHandler}/>
          <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </div>

  )
}
